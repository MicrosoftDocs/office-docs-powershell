---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-cskerberosaccountassignment
schema: 2.0.0
title: Remove-CsKerberosAccountAssignment
---

# Remove-CsKerberosAccountAssignment

## SYNOPSIS
Removes one or more Kerberos account assignments.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsKerberosAccountAssignment [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
In Microsoft Office Communications Server 2007 and Microsoft Office Communications Server 2007 R2, IIS ran under a standard user account.
This had the potential to cause issues: if that password expired you could lose your Web Services, an issue that was often difficult to diagnose.
To help avoid the issue of expiring passwords, Skype for Business Server enables you to create a computer account (for a computer that doesn't actually exist) that can serve as the authentication principal for all the computers in a site that are running IIS.
Because these accounts use the Kerberos authentication protocol, the accounts are referred to as Kerberos accounts and the new authentication process is known as Kerberos web authentication.
This enables you to manage all your IIS servers by using a single account.

To run your servers under this new authentication principal, you must first create a computer account (which, again, is not tied to an actual computer) by using the `New-CsKerberosAccount` cmdlet; this account is then assigned to one or more sites.
After the assignment has been made, the association is enabled by running the `Enable-CsTopology` cmdlet; among other things, this creates the required service principal name (SPN) in Active Directory Domain Services.
SPNs provide a way for client applications to locate a particular service.

Each Skype for Business Server site can be associated with, at most, a single Kerberos account.
(However, each account can be associated with multiple sites.) At any time you can use the `Remove-CsKerberosAccountAssignment` cmdlet to remove the association between a site and an account.
This cmdlet does not delete the account in question; it simply severs the association between the account and the site, effectively disabling Kerberos web authentication in that site.

Note that, after running the `Remove-CsKerberosAccountAssignment` cmdlet you must then run the `Enable-CsTopology` cmdlet.
This removes the account's service principal name from Active Directory and complete disables Kerberos web authentication.


## EXAMPLES

### Example 1
```
Remove-CsKerberosAccountAssignment -Identity "site:Redmond"

Enable-CsTopology
```

The commands shown in Example 1 remove the Kerberos account assignment from the Redmond site, then call the `Enable-CsTopology` cmdlet to finish disabling Kerberos web authentication.


### Example 2
```
Get-CsKerberosAccountAssignment | Remove-CsKerberosAccountAssignment

Enable-CsTopology
```

In Example 2, all the Kerberos account assignments currently in use are deleted.
To do this, the first command calls the `Get-CsKerberosAccountAssignment` cmdlet (without any parameters) in order to return a collection of all the Kerberos account assignments.
This collection is then piped to the `Remove-CsKerberosAccountAssignment` cmdlet, which deletes each assignment in the collection.
When that's done, the second command in the example calls the `Enable-CsTopology` cmdlet to finish disabling Kerberos web authentication.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When present, suppresses all error messages except for fatal errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique identifier of the site where the Kerberos account assignment is to be removed.
(This is the Identity of the site, not of the Kerberos account.) For example: `-Identity "site:Redmond"`.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment

The `Remove-CsKerberosAccountAssignment` cmdlet accepts pipelined instances of the Kerberos account assignment object.

## OUTPUTS

### None
The `Remove-CsKerberosAccountAssignment` cmdlet does not return any objects or values.
Instead, the cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.KerberosAccount.KerberosAccountAssignment object.

## NOTES

## RELATED LINKS

[Get-CsKerberosAccountAssignment](Get-CsKerberosAccountAssignment.md)

[New-CsKerberosAccountAssignment](New-CsKerberosAccountAssignment.md)

[Set-CsKerberosAccountAssignment](Set-CsKerberosAccountAssignment.md)
