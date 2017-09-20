---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsCertificateConfiguration
schema: 2.0.0
---

# Test-CsCertificateConfiguration

## SYNOPSIS
Returns information about the Skype for Business Server certificates being used on the local computer.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsCertificateConfiguration [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsCertificateConfiguration` cmdlet is an example of a "synthetic transaction." Synthetic transactions are used in Skype for Business Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be automatically run by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

The `Test-CsCertificateConfiguration` cmdlet returns information about the certificates being used by Skype for Business Server.
The `Test-CsCertificateConfiguration` cmdlet is primarily intended for use by the Certificate wizard.
It is recommended that administrators use the `Get-CsCertificate` cmdlet to retrieve certificate information.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsCertificateConfiguration
```

The command shown in Example 1 returns information about the certificates that are currently being used (on the local computer) by Skype for Business Server.


### -------------------------- Example 2 --------------------------
```
Test-CsCertificateConfiguration -Report "C:\Logs\Certificates.xml"
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, however, the Report parameter is used to specify a file path (C:\Logs\Certificates.xml) for the output file generated when you run the `Test-CsCertificateConfiguration` cmdlet.


## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\Certificates.html"`.
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
The `Test-CsCertificateConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsCertificateConfiguration` cmdlet returns instances of the Microsoft.Rtc.Management.Deployment,CertificateExists object.

## NOTES

## RELATED LINKS

[Get-CsCertificate]()
