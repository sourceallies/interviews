package com.kylehoehns.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class UtilTest {

  @Test
  public void testHello() {
    assertEquals("Hello world!", Util.hello("world"));
  }

}