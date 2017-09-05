---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsKerberosAccountAssignment

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Verifies the configuration of the Kerberos account assigned to a site.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Verifies the configuration of the Kerberos account assigned to a site.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsKerberosAccountAssignment -Identity <XdsIdentity> [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Microsoft Lync Server 2010 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

The Test-CsKerberosAccountAssignment cmdlet provides a way for you to verify that a Kerberos account has been associated with a given site, that this account has been configured correctly, and that the account is working as expected.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsKerberosAccountAssignment"}

**Below Content Applies To:** Lync Server 2013

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Lync Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

The Test-CsKerberosAccountAssignment cmdlet provides a way for you to verify that a Kerberos account has been associated with a given site, that this account has been configured correctly, and that the account is working as expected.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsKerberosAccountAssignment"}

**Below Content Applies To:** Skype for Business Server 2015

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server 2015 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

The Test-CsKerberosAccountAssignment cmdlet provides a way for you to verify that a Kerberos account has been associated with a given site, that this account has been configured correctly, and that the account is working as expected.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Test-CsKerberosAccountAssignment -Identity site:Redmond
```

The command shown in Example 1 verifies that the Kerberos account assigned to the Redmond site is configured correctly and is working as expected.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 verifies that the Kerberos account assigned to the Redmond site is configured correctly and is working as expected.

Test-CsKerberosAccountAssignment -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 verifies that the Kerberos account assigned to the Redmond site is configured correctly and is working as expected.

Test-CsKerberosAccountAssignment -Identity site:Redmond

## PARAMETERS

### -Identity
Name of the site where the Kerberos account was assigned.
For example: -Identity "site:Redmond".

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
For example: -Report "C:\Logs\TestKerberos.html".

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
Test-CsKerberosAccountAssignment does not accept pipelined input.

###  
None.
The Test-CsKerberosAccountAssignment cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsKerberosAccountAssignment does not return any objects or values.

###  
The Test-CsKerberosAccountAssignment cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/442bbb32-7ad1-40c4-bf17-42ecde0a7286(OCS.14).aspx)

[Get-CsKerberosAccountAssignment]()

[New-CsKerberosAccountAssignment]()

[Remove-CsKerberosAccountAssignment]()

[Set-CsKerberosAccountAssignment]()

[Online Version](http://technet.microsoft.com/EN-US/library/442bbb32-7ad1-40c4-bf17-42ecde0a7286(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/442bbb32-7ad1-40c4-bf17-42ecde0a7286(OCS.16).aspx)

