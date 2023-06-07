juc并发编程

主要掌握以下几个类的使用方法:

- CAS

  ```java
  public class Cas {
  
      public static void main(String[] args) {
          // 无法控制并发
          AtomicInteger ai = new AtomicInteger(1);
          System.out.println(ai.compareAndSet(0, 2));
          System.out.println(ai.compareAndSet(1, 2));
  
  //        Unsafe unsafe = Unsafe.getUnsafe();
      }
  }
  ```

  ABA问题,, 1--- >2 ------>1 发生了改变, 但外部并不清楚这种改变

  ```java
  
      public static void main(String[] args) {
          // 无法控制并发
          AtomicInteger ai = new AtomicInteger(1);
          System.out.println(ai.compareAndSet(0, 2));
          System.out.println(ai.compareAndSet(1, 2));
  
  //        Unsafe unsafe = Unsafe.getUnsafe();
  
          AtomicStampedReference atomicStampedReference = new AtomicStampedReference(2,3);
          System.out.println(atomicStampedReference.compareAndSet(2, 2, 3, 1));
          System.out.println(atomicStampedReference.compareAndSet(2, 3, 3, 1));
      }
  ```

  

- Atomic 类

  ​	![image](https://segmentfault.com/img/bVcHVDB)



 



- countdownlatch

  ```java
  public static void main(String[] args) throws InterruptedException {
          CountDownLatch countDownLatch = new CountDownLatch(2);
  
          new Thread(()->{
              System.out.println(1);
              countDownLatch.countDown();
          }).start();
          new Thread(()->{
              System.out.println(2);
              countDownLatch.countDown();
          }).start();
          // 同步等待2个线程同步完成
          countDownLatch.await();
      }
  ```

  使用场景:同步等待

- ### CyclicBarrier

  ```java
  public class CyclicBarrierDemo {
  
      private final static int gradeNum = 6;
  
      private static CyclicBarrier barrier = new CyclicBarrier(6,()->{
          System.out.println("====================");
      });
  
      public static void main(String[] args) throws Exception {
          ExecutorService exec = Executors.newScheduledThreadPool(gradeNum);
          System.out.println("通知、通知，请准备的年级先出发.....");
          for (int i = 0; i < gradeNum; i++) {
              TimeUnit.SECONDS.sleep(1);
              int gradeName = i + 1;
              exec.submit(() -> {
                  try {
                      wait(gradeName);
                  } catch (Exception e) {
                  }
              });
          }
  //        exec.shutdown();
  
          for (int i = 0; i < gradeNum; i++) {
              TimeUnit.SECONDS.sleep(1);
              int gradeName = i + 1;
              exec.submit(() -> {
                  try {
                      wait(gradeName);
                  } catch (Exception e) {
                  }
              });
          }
          // ThreadPool 线程池需要关闭，否则整个jvm进程不会退出
          exec.shutdown();
      }
  
      private static void wait(int gradeName) throws Exception {
          TimeUnit.SECONDS.sleep(1);
          System.out.println(gradeName + "年级所有同学来到了出口......");
          barrier.await();
      }
  }
  
  ```

  可循环同步节点

- ### Semaphore

  ​	信号量,抢占资源使用

     重要方法 acquire 、release

  ​	

  ```java
  public class SeamphoreDemo {
  
      public static void main(String[] args) throws InterruptedException {
          Semaphore seamphore = new Semaphore(0);
  
          boolean b = seamphore.tryAcquire();
          System.out.printf("acquire:%b\n",b);
  
          seamphore.release();
          b = seamphore.tryAcquire();
          System.out.printf("acquire:%b\n",b);
      }
  }
  ```

  

  **CountDownLatch`和`CyclicBarrier`都用于实现多线程之间的相互等待，但二者的关注点不同。`CountDownLatch`主要用于主线程等待其他子线程任务均执行完毕后再执行接下来的业务逻辑单元，而`CyclicBarrier`主要用于一组线程互相等待大家都达到某个状态后，再同时执行接下来的业务逻辑单元。此外，`CountDownLatch`是不可以重用的，而`CyclicBarrier`是可以重用的**

  

  Semaphore`和`Java中的锁功能类似，主要用于控制资源的并发访问**

  # 锁

- ### synchronized

- ReentrantLock

- ReentrantReadWriteLock

  





参考文档: https://segmentfault.com/a/1190000037600050