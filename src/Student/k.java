package queue;

import java.util.Scanner;


class Queue
{
	public static void main(String args[])
	{
		
		Scanner scan=new Scanner(System.in);
		int m=0;		
		System.out.println("\nEnter the size of queue");
		int n=scan.nextInt();		
		Integer a[]=new Integer[n];
		CircularQ<Integer> CircularQ=new CircularQ<>(a);		
		while(m!=4)
		{
			System.out.println("MENU--> \n1. Enqueue \n2. Dequeue \n3. Print \n4.EXIT");
			m=scan.nextInt();
                        
			switch(m)
			{
			case 1: try
					{
					
                                                if((CircularQ.f==CircularQ.r+1) || (CircularQ.f==0 && CircularQ.r==n-1))
                                                {
                                                    throw new ArrayIndexOutOfBoundsException();
                                                }
                                                    else
                                                {
                                                        System.out.println("OK");
                                                }
                                                //
                                                System.out.println("Enter element to be enqueued");
						Integer e=scan.nextInt();
						CircularQ.enQueue(e,n);
                                               
					}
					catch(ArrayIndexOutOfBoundsException x)
					{
						System.out.println("OVERFLOW!");
					}break;
			case 2: try
					{
						CircularQ.isEmpty();
						CircularQ.deQueue();
					}
					catch(MyExcep qe)
					{
						System.out.println("UNDERFLOW!");
					}break;
			case 3: CircularQ.display(n);break;
			case 4: break;
			case 5:{
                                    Double arr[]=new Double[n];
                                    GenSum<Double> g;
                                    g = new GenSum<>(arr);
            
                                    System.out.println("Enter the elements of the array");
                                     for(int i=0;i<arr.length;i++)
                                        {
                                              arr[i]=scan.nextDouble();
                                         }
                                              g.sum(arr);}
                            break;
			}
		}
			
	}
}


package queue;



class MyExcep extends Exception
{
	MyExcep()
	{
		super();
	}
}


package queue;

/**
 *
 * @author rcoem
 */
import java.util.Scanner;


class CircularQ<Q>
{
	Q[] o;
	int f=-1,r=-1,n;
	Scanner scan=new Scanner(System.in);
	
	CircularQ(Q[] ob)
	{
		o=ob;
	}


//	void isFull() throws ArrayIndexOutOfBoundsException
//	{
//		if((f==r+1) || (f==0 && r==n-1))
//		{
//			throw new ArrayIndexOutOfBoundsException();
//		}
//		else
//		{
//			System.out.println("OK");
//		}
//	}
//	
	void isEmpty() throws MyExcep
	{
		if(f==-1)
		{
			throw new MyExcep();
		}
		else
		{
			System.out.println("OK");
		}
	}
	
	void enQueue(Q data,int n)
	{
		if(f==-1 && r==-1)
		{
			r=0;
			f=0;	
		}
		else if(r==n-1 && f!=0)
		{
			r=0;
		}
		else
		{
			r=r+1;
		}
		o[r]=data;
	}
	
	void deQueue()
	{ 
	    if(f==r)
	    { 
	        f=-1; 
	        r=-1; 
	    } 
	    else if(f==n-1)
	    {
	    	f=0; 
	    }
	    else
	    {
	    	f++;
	    }
	    /*System.out.println(f+"+"+r);*/
	}
	
	void display(int n)
	{
		try
		{
			isEmpty();
			System.out.println("\nCircular Queue-->\n "); 
			if (r>= f)
			{ 
				for(int i=f;i<=r;i++)
				{
					System.out.println(o[i]); 
				}
			}
			else
			{
				for(int i=f;i<n;i++) 
				{
					System.out.println(o[i]);
				}
				for(int i=0;i<=r;i++)
				{
					System.out.println(o[i]);
				}
			}
		}
		catch(MyExcep e)
		{
			System.out.println("\nQueue is Empty!");
		}
	}
}


/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package queue;

public class GenSum <T>
{
    T[] t;

    GenSum(T[] t)
    {
        this.t=t;
    }
    double s;
    public <T> void sum(T[] t)
    {
        for (T t1 : t) {
            s += ((Number) t1).doubleValue();
        }
        System.out.println("The Sum is = "+s);
    }
}
