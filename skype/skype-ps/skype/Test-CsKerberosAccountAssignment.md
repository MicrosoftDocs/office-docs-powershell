---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsKerberosAccountAssignment
schema: 2.0.0
---

# Test-CsKerberosAccountAssignment

## SYNOPSIS
Verifies the configuration of the Kerberos account assigned to a site.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsKerberosAccountAssignment -Identity <XdsIdentity> [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

The `Test-CsKerberosAccountAssignment` cmdlet provides a way for you to verify that a Kerberos account has been associated with a given site, that this account has been configured correctly, and that the account is working as expected.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Test-CsKerberosAccountAssignment -Identity site:Redmond
```

The command shown in Example 1 verifies that the Kerberos account assigned to the Redmond site is configured correctly and is working as expected.


## PARAMETERS

### -Identity
Name of the site where the Kerberos account was assigned.
For example: `-Identity "site:Redmond"`.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: `-Report "C:\Logs\TestKerberos.html"`.

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
The `Test-CsKerberosAccountAssignment` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsKerberosAccountAssignment` cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Get-CsKerberosAccountAssignment](Get-CsKerberosAccountAssignment.md)

[New-CsKerberosAccountAssignment](New-CsKerberosAccountAssignment.md)

[Remove-CsKerberosAccountAssignment](Remove-CsKerberosAccountAssignment.md)

[Set-CsKerberosAccountAssignment](Set-CsKerberosAccountAssignment.md)
