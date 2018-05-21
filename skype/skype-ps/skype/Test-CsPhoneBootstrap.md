---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsPhoneBootstrap
schema: 2.0.0
---

# Test-CsPhoneBootstrap

## SYNOPSIS
Verifies that a user can log on to Skype for Business Server using a Phone Edition-compatible device.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsPhoneBootstrap [[-TargetFqdn] <String>] -PhoneOrExt <String> -PIN <String> [-RegistrarPort <Int32>]
 [-TargetUri <String>] [-UserSipAddress <String>] [-Force] [-Verbose] [-OutVerboseVariable <String>]
 [-OutLoggerVariable <String>] -PhoneOrExtension <String> [<CommonParameters>]
```

## DESCRIPTION
In order to connect to Skype for Business Server, Phone Edition-compatible devices need to use Dynamic Host Configuration Protocol (DHCP) to retrieve the address of a Skype for Business Server Registrar; these devices must also provide a valid phone number and associated personal identification number (PIN) in order to be authenticated by the system.
(This process is known as "bootstrapping".) The `Test-CsPhoneBootstrap` cmdlet enables administrators to verify that a given user -- using the phone number and PIN assigned to him or her -- is able to log on to the system from a Phone Edition-compatible device.
(No device is actually needed in order to run the test.)

In order for the `Test-CsPhoneBootstrap` cmdlet to make its check, the Registrar pool that hosts the user account being tested must be discoverable using DHCP.
To determine whether a Registrar is discoverable in this manner, use the `Get-CsRegistrarConfiguration` cmdlet and check the value of the EnableDHCPServer property.
If this property is set to False, you will need to use the `Set-CsRegistrarConfiguration` cmdlet to set the property value to True and make the Registrar discoverable using DHCP.
This can also be done by using Enterprise DHCP Server and configuring the Skype for Business Server -specific options.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsPhoneBootstrap -PhoneOrExtension "+14255551219" -Pin "0712"
```

The command shown in Example 1 verifies that the user with the specified phone number and PIN can connect to Skype for Business Server using a Phone Edition-compatible device.
In order to run the test, the user's phone number (+14255551219) and the user's PIN (0712) must be supplied.


### -------------------------- Example 2 --------------------------
```
Test-CsPhoneBootstrap -PhoneOrExtension "+14255551219" -Pin "0712" -UserSipAddress "sip:kenmyer@litwareinc.com"
```

Example 2 verifies whether or not the user with the specified phone number and PIN can connect to Skype for Business Server using a Phone Edition-compatible device.
In this example, the UserSipAddress parameter is included as an additional check: the test will fail if the user with the SIP address is not the same as the user with the specified phone number and PIN.


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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipAddress
SIP address for the user account used in the text; for example:

`-UserSipAddress "sip:kenmyer@litwareinc.com"`

The UserSipAddress parameter must reference the supplied phone number and PIN; the test will fail if the included phone number and PIN do not belong to the user specified by the UserSipAddress parameter.
Note that the SIP address must include the "sip:" prefix.


```yaml
Type: String
Parameter Sets: (All)
Aliases: ua
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

`-OutVerboseVariable TestOutput`

Do not prepend a $ character when specifying the variable name.


```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

`-OutLoggerVariable TestOutput`

Note: Do not use prepend a $ character when specifying the variable name. To save the information stored in the logger variable to an HTML file, use a command similar to this:

`$TestOutput.ToHTML() \> C:\Logs\TestOutput.html`

To save the information stored in the logger variable to an XML file, use a command similar to this:

`$TestOutput.ToXML() \> C:\Logs\TestOutput.xml`

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `Test-CsPhoneBootstrap` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsPhoneBootstrap` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Test-CsRegistration](Test-CsRegistration.md)

