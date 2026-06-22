---
applicable: Exchange Online
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/remove-ldapdirectory
schema: 2.0.0
title: Remove-LdapDirectory
---

# Remove-LdapDirectory

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Remove-LdapDirectory cmdlet to remove an LDAP directory configuration from a tenant.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Remove-LdapDirectory -Organization <String> -Id <String>
 [<CommonParameters>]
```

## DESCRIPTION
Deletes a configured LDAP directory from the tenant configuration.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Remove-LdapDirectory -Organization contoso.com -Id ContosoLdap
```

This example removes the LDAP directory named ContosoLdap from the contoso.com tenant configuration.

## PARAMETERS

### -Organization

> Applicable: Exchange Online

Specifies the tenant identifier (for example, contoso.com).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id

> Applicable: Exchange Online

Specifies the unique identifier of the LDAP directory to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/add-ldapdirectory)

[Get-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/get-ldapdirectory)

[Set-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/set-ldapdirectory)
