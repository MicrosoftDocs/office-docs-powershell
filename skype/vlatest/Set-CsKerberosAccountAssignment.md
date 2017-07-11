---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsKerberosAccountAssignment

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Associates a Kerberos account, which is used for IIS Internet Information Services (IIS) authentication, with a site.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Associates a Kerberos account, which is used for IIS Internet Information Services (IIS) authentication, with a site.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsKerberosAccountAssignment [[-Identity] <XdsIdentity>] [-UserAccount <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsKerberosAccountAssignment [-UserAccount <String>] [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Microsoft Lync Server 2010 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Lync Server 2010 site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services (AD DS).
SPNs provide a way for client applications to locate a particular service.

The Set-CsKerberosAccountAssignment cmdlet enables you to change the Kerberos account assigned to a given site.
This cmdlet is used for sites that are already associated with an account.
To assign an account to a site that currently is not associated with a Kerberos account, use the New-CsKerberosAccountAssignment cmdlet instead.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsKerberosAccountAssignment cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsKerberosAccountAssignment"}

Below Content Applies To: Lync Server 2013

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Lync Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Lync Server site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services (AD DS).
SPNs provide a way for client applications to locate a particular service.

The Set-CsKerberosAccountAssignment cmdlet enables you to change the Kerberos account assigned to a given site.
This cmdlet is used for sites that are already associated with an account.
To assign an account to a site that currently is not associated with a Kerberos account, use the New-CsKerberosAccountAssignment cmdlet instead.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsKerberosAccountAssignment cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsKerberosAccountAssignment"}

Below Content Applies To: Skype for Business Server 2015

In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server 2015 enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts, and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account by using the New-CsKerberosAccount cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association between the account and the Skype for Business Server 2015 site is enabled by running the Enable-CsTopology cmdlet.
Among other things, this creates the required service principal name (SPN) in Active Directory Domain Services.
SPNs provide a way for client applications to locate a particular service.

The Set-CsKerberosAccountAssignment cmdlet enables you to change the Kerberos account assigned to a given site.
This cmdlet is used for sites that are already associated with an account.
To assign an account to a site that currently is not associated with a Kerberos account, use the New-CsKerberosAccountAssignment cmdlet instead.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsKerberosAccountAssignment -UserAccount "litwareinc\keberostest" -Identity "site:Redmond"
Enable-CsTopology
```

The commands shown in Example 1 associate an existing Kerberos account (litwareinc\keberostest) with the Redmond site, then use Enable-CsTopology to enable the new association.
To do this, the first command in the example uses Set-CsKerberosAccountAssignment to associate the account litwareinc\keberostest with the Redmond site; the second command then calls Enable-CsTopology in order to create the required service principal name in Active Directory and to enable the modified account assignment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 associate an existing Kerberos account (litwareinc\keberostest) with the Redmond site, then use Enable-CsTopology to enable the new association.
To do this, the first command in the example uses Set-CsKerberosAccountAssignment to associate the account litwareinc\keberostest with the Redmond site; the second command then calls Enable-CsTopology in order to create the required service principal name in Active Directory and to enable the modified account assignment.

Set-CsKerberosAccountAssignment -UserAccount "litwareinc\keberostest" -Identity "site:Redmond"

Enable-CsTopology

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 associate an existing Kerberos account (litwareinc\keberostest) with the Redmond site, then use the Enable-CsTopology cmdlet to enable the new association.
To do this, the first command in the example uses the Set-CsKerberosAccountAssignment cmdlet to associate the account litwareinc\keberostest with the Redmond site; the second command then calls the Enable-CsTopology cmdlet in order to create the required service principal name in Active Directory and to enable the modified account assignment.

Set-CsKerberosAccountAssignment -UserAccount "litwareinc\keberostest" -Identity "site:Redmond"

Enable-CsTopology

## PARAMETERS

### -Identity
Unique identifier of the site where the Kerberos account was assigned.
(This is the Identity of the site, not of the computer account.) For example: -Identity "site:Redmond".

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserAccount
Below Content Applies To: Lync Server 2010

Account name for the account to be assigned, using the format domain_name\user_name.
For example: -UserAccount "litwareinc\kerberostest".

Note that, despite the name UserAccount, the account is actually a computer account, not a user account.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Account name for the account to be assigned, using the format domain_name\user_name.
For example: -UserAccount "litwareinc\kerberostest".
The user name portion of the account (kerberostest) is a NETBIOS name and can contain a maximum of 15 characters.

Note that, despite the name UserAccount, the account is actually a computer account, not a user account.



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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.
Set-CsKerberosAccountAssignment accepts pipelined instances of the Kerberos account assignment object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.
The Set-CsKerberosAccountAssignment cmdlet accepts pipelined instances of the Kerberos account assignment object.

## OUTPUTS

###  
Set-CsKerberosAccountAssignment does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.

###  
The Set-CsKerberosAccountAssignment cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/16a964d2-2515-4a37-9686-3e377de58b14(OCS.14).aspx)

[Get-CsKerberosAccountAssignment]()

[New-CsKerberosAccount]()

[New-CsKerberosAccountAssignment]()

[Remove-CsKerberosAccountAssignment]()

[Online Version](http://technet.microsoft.com/EN-US/library/16a964d2-2515-4a37-9686-3e377de58b14(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/16a964d2-2515-4a37-9686-3e377de58b14(OCS.16).aspx)

