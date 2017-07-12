---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsPhoneBootstrap

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Verifies that a user can log on to Microsoft Lync Server 2010 using a Microsoft Lync 2010 Phone Edition-compatible device.

**Below Content Applies To:** Lync Server 2013

Verifies that a user can log on to Lync Server using a Lync Phone Edition-compatible device.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Verifies that a user can log on to Skype for Business Server 2015 using a Phone Edition-compatible device.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsPhoneBootstrap [[-TargetFqdn] <String>] -PhoneOrExt <String> -PIN <String> [-RegistrarPort <Int32>]
 [-TargetUri <String>] [-UserSipAddress <String>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-OutLoggerVariable <String>] -PhoneOrExtension <String> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In order to connect to Lync Server 2010, Lync 2010 Phone Edition-compatible devices need to use Dynamic Host Configuration Protocol (DHCP) to retrieve the address of a Lync Server Registrar; these devices must also provide a valid phone number and associated personal identification number (PIN) in order to be authenticated by the system.
(This process is known as "bootstrapping".) The Test-CsPhoneBootstrap cmdlet enables administrators to verify that a given user -- using the phone number and PIN assigned to him or her -- is able to log on to the system from a Lync 2010 Phone Edition-compatible device.
(No device is actually needed in order to run the test.)

In order for Test-CsPhoneBootstrap to make its check, the Registrar pool that hosts the user account being tested must be discoverable using DHCP.
To determine whether a Registrar is discoverable in this manner, use the cmdlet Get-CsRegistrarConfiguration and check the value of the EnableDHCPServer property.
If this property is set to False, you will need to use Set-CsRegistrarConfiguration to set the property value to True and make the Registrar discoverable using DHCP.
This can also be done by using Enterprise DHCP Server and configuring the Lync Server-specific options.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsPhoneBootstrap"}

**Below Content Applies To:** Lync Server 2013

In order to connect to Lync Server, Lync Phone Edition-compatible devices need to use Dynamic Host Configuration Protocol (DHCP) to retrieve the address of a Lync Server Registrar; these devices must also provide a valid phone number and associated personal identification number (PIN) in order to be authenticated by the system.
(This process is known as "bootstrapping".) The Test-CsPhoneBootstrap cmdlet enables administrators to verify that a given user -- using the phone number and PIN assigned to him or her -- is able to log on to the system from a Lync Phone Edition-compatible device.
(No device is actually needed in order to run the test.)

In order for Test-CsPhoneBootstrap to make its check, the Registrar pool that hosts the user account being tested must be discoverable using DHCP.
To determine whether a Registrar is discoverable in this manner, use the cmdlet Get-CsRegistrarConfiguration and check the value of the EnableDHCPServer property.
If this property is set to False, you will need to use Set-CsRegistrarConfiguration to set the property value to True and make the Registrar discoverable using DHCP.
This can also be done by using Enterprise DHCP Server and configuring the Lync Server-specific options.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsPhoneBootstrap"}

**Below Content Applies To:** Skype for Business Server 2015

In order to connect to Skype for Business Server 2015, Phone Edition-compatible devices need to use Dynamic Host Configuration Protocol (DHCP) to retrieve the address of a Skype for Business Server 2015 Registrar; these devices must also provide a valid phone number and associated personal identification number (PIN) in order to be authenticated by the system.
(This process is known as "bootstrapping".) The Test-CsPhoneBootstrap cmdlet enables administrators to verify that a given user -- using the phone number and PIN assigned to him or her -- is able to log on to the system from a Phone Edition-compatible device.
(No device is actually needed in order to run the test.)

In order for the Test-CsPhoneBootstrap cmdlet to make its check, the Registrar pool that hosts the user account being tested must be discoverable using DHCP.
To determine whether a Registrar is discoverable in this manner, use the Get-CsRegistrarConfiguration cmdlet and check the value of the EnableDHCPServer property.
If this property is set to False, you will need to use the Set-CsRegistrarConfiguration cmdlet to set the property value to True and make the Registrar discoverable using DHCP.
This can also be done by using Enterprise DHCP Server and configuring the Skype for Business Server 2015-specific options.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Test-CsPhoneBootstrap -PhoneOrExt "+14255551219" -Pin "0712"
```

The command shown in Example 1 verifies that the user with the specified phone number and PIN can connect to Lync Server using a Lync 2010 Phone Edition-compatible device.
In order to run the test, the user's phone number (+14255551219) and the user's PIN (0712) must be supplied.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 verifies that the user with the specified phone number and PIN can connect to Lync Server using a Lync Phone Edition-compatible device.
In order to run the test, the user's phone number (+14255551219) and the user's PIN (0712) must be supplied.

Test-CsPhoneBootstrap -PhoneOrExt "+14255551219" -Pin "0712"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 verifies that the user with the specified phone number and PIN can connect to Skype for Business Server 2015 using a Phone Edition-compatible device.
In order to run the test, the user's phone number (+14255551219) and the user's PIN (0712) must be supplied.

Test-CsPhoneBootstrap -PhoneOrExtension "+14255551219" -Pin "0712"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Test-CsPhoneBootstrap -PhoneOrExt "+14255551219" -Pin "0712" -UserSipAddress "sip:kenmyer@litwareinc.com"
```

The preceding command verifies whether or not the user with the specified phone number and PIN can connect to Lync Server using a Lync 2010 Phone Edition-compatible device.
In this example, the UserSipAddress parameter is included as an additional check: the test will fail if the user with the SIP address is not the same as the user with the specified phone number and PIN.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 verifies whether or not the user with the specified phone number and PIN can connect to Lync Server using a Lync Phone Edition-compatible device.
In this example, the UserSipAddress parameter is included as an additional check: the test will fail if the user with the SIP address is not the same as the user with the specified phone number and PIN.

Test-CsPhoneBootstrap -PhoneOrExt "+14255551219" -Pin "0712" -UserSipAddress "sip:kenmyer@litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 verifies whether or not the user with the specified phone number and PIN can connect to Skype for Business Server 2015 using a Phone Edition-compatible device.
In this example, the UserSipAddress parameter is included as an additional check: the test will fail if the user with the SIP address is not the same as the user with the specified phone number and PIN.

Test-CsPhoneBootstrap -PhoneOrExtension "+14255551219" -Pin "0712" -UserSipAddress "sip:kenmyer@litwareinc.com"

## PARAMETERS

### -PhoneOrExt
Telephone number or extension of the user account being tested.
For example: -PhoneOrExt "+14255551219".

```yaml
Type: String
Parameter Sets: (All)
Aliases: ph
Applicable: Lync Server 2010, Lync Server 2013

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PIN
PIN of the user account being tested.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPort
SIP port used by the Registrar service.
This parameter is not required if the Registrar uses the default port 5061.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: rp
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn
Fully qualified domain name (FQDN) of the Registrar pool that hosts the user account to be tested.
If not specified, then DHCP discovery will be used to locate the Registrar pool.

```yaml
Type: String
Parameter Sets: (All)
Aliases: t
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetUri
URL of the certificate provisioning service.
If this parameter is not included, then the DHCP discovery will be used to locate the target URI.

```yaml
Type: String
Parameter Sets: (All)
Aliases: twsu
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
**Below Content Applies To:** Lync Server 2010

SIP address for the user account used in the text; for example: -UserSipAddress "sip:kenmyer@litwareinc.com".
The UserSIPAddress parameter must reference the supplied phone number and PIN; the test will fail if the included phone number and PIN do not belong to the user specified by the UserSipAddress parameter.
Note that the SIP address must include the "sip:" prefix.



**Below Content Applies To:** Lync Server 2013

SIP address for the user account used in the text; for example: -UserSipAddress "sip:kenmyer@litwareinc.com".
The UserSipAddress parameter must reference the supplied phone number and PIN; the test will fail if the included phone number and PIN do not belong to the user specified by the UserSipAddress parameter.
Note that the SIP address must include the "sip:" prefix.



**Below Content Applies To:** Skype for Business Server 2015

SIP address for the user account used in the text; for example:

-UserSipAddress "sip:kenmyer@litwareinc.com"

The UserSipAddress parameter must reference the supplied phone number and PIN; the test will fail if the included phone number and PIN do not belong to the user specified by the UserSipAddress parameter.
Note that the SIP address must include the "sip:" prefix.



```yaml
Type: String
Parameter Sets: (All)
Aliases: ua
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable
**Below Content Applies To:** Lync Server 2010

{{Fill OutVerboseVariable Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

-OutVerboseVariable TestOutput

Do not prepend a $ character when specifying the variable name.



```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutLoggerVariable
When present, detailed output from running the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

-OutLoggerVariable TestOutput

Note: Do not use prepend a $ character when specifying the variable name.To save the information stored in the logger variable to an HTML file, use a command similar to this:

$TestOutput.ToHTML() \> C:\Logs\TestOutput.html

To save the information stored in the logger variable to an XML file, use a command similar to this:

$TestOutput.ToXML() \> C:\Logs\TestOutput.xml

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneOrExtension
Telephone number or extension of the user account being tested.
For example: -PhoneOrExt "+14255551219".

```yaml
Type: String
Parameter Sets: (All)
Aliases: ph
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Test-CsPhoneBootstrap does not accept pipelined input.

###  
None.
The Test-CsPhoneBootstrap cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsPhoneBootstrap returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsPhoneBootstrap cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b132446b-f264-405e-8e3a-971ab1c37694(OCS.14).aspx)

[Test-CsRegistration]()

[Online Version](http://technet.microsoft.com/EN-US/library/b132446b-f264-405e-8e3a-971ab1c37694(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b132446b-f264-405e-8e3a-971ab1c37694(OCS.16).aspx)

