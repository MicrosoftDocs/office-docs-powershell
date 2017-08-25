---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsCertificateConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the Microsoft Lync Server 2010 certificates being used on the local computer.

**Below Content Applies To:** Lync Server 2013

Returns information about the Lync Server certificates being used on the local computer.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the Skype for Business Server 2015 certificates being used on the local computer.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsCertificateConfiguration [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Test-CsCertificateConfiguration is an example of a "synthetic transaction." Synthetic transactions are used in Lync Server 2010 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Test-CsCertificateConfiguration returns information about the certificates being used by Lync Server 2010.
The Test-CsCertificateConfiguration cmdlet is primarily intended for use by the Certificate wizard.
It is recommended that administrators use Get-CsCertificate to retrieve certificate information.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsCertificateConfiguration"}

**Below Content Applies To:** Lync Server 2013

Test-CsCertificateConfiguration is an example of a "synthetic transaction." Synthetic transactions are used in Lync Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Test-CsCertificateConfiguration returns information about the certificates being used by Lync Server.
The Test-CsCertificateConfiguration cmdlet is primarily intended for use by the Certificate wizard.
It is recommended that administrators use Get-CsCertificate to retrieve certificate information.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsCertificateConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

The Test-CsCertificateConfiguration cmdlet is an example of a "synthetic transaction." Synthetic transactions are used in Skype for Business Server 2015 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

The Test-CsCertificateConfiguration cmdlet returns information about the certificates being used by Skype for Business Server 2015.
The Test-CsCertificateConfiguration cmdlet is primarily intended for use by the Certificate wizard.
It is recommended that administrators use the Get-CsCertificate cmdlet to retrieve certificate information.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Test-CsCertificateConfiguration
```

The command shown in Example 1 returns information about the certificates that are currently being used (on the local computer) by Lync Server 2010.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about the certificates that are currently being used (on the local computer) by Lync Server.

Test-CsCertificateConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about the certificates that are currently being used (on the local computer) by Skype for Business Server 2015.

Test-CsCertificateConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Test-CsCertificateConfiguration -Report "C:\Logs\Certificates.xml"
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is used to specify a file path (C:\Logs\Certificates.xml) for the output file generated when you run Test-CsCertificateConfiguration.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is used to specify a file path (C:\Logs\Certificates.xml) for the output file generated when you run Test-CsCertificateConfiguration.

Test-CsCertificateConfiguration -Report "C:\Logs\Certificates.xml"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is used to specify a file path (C:\Logs\Certificates.xml) for the output file generated when you run the Test-CsCertificateConfiguration cmdlet.

Test-CsCertificateConfiguration -Report "C:\Logs\Certificates.xml"

## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\Certificates.html".
If this file already exists, it will be overwritten when you run the cmdlet.

```yaml
Type: String
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Test-CsCertificateConfiguration does not accept pipelined input.

###  
None.
The Test-CsCertificateConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsCertificateConfiguration returns instances of the Microsoft.Rtc.Management.Deployment,CertificateExists object.

###  
The Test-CsCertificateConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.Deployment,CertificateExists object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8086bdf7-d283-4666-9f6c-0d5a3a31b3a6(OCS.14).aspx)

[Get-CsCertificate]()

[Online Version](http://technet.microsoft.com/EN-US/library/8086bdf7-d283-4666-9f6c-0d5a3a31b3a6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8086bdf7-d283-4666-9f6c-0d5a3a31b3a6(OCS.16).aspx)

