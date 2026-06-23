---
applicable: Exchange Online
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-ldapdirectory
schema: 2.0.0
title: Get-LdapDirectory
---

# Get-LdapDirectory

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-LdapDirectory cmdlet to view LDAP directory configurations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Get-LdapDirectory -Organization <OrganizationIdParameter>
 [<CommonParameters>]
```

### Identity
```
Get-LdapDirectory [[-Id] <String>] -Organization <OrganizationIdParameter>
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-LdapDirectory -Organization contoso.onmicrosoft.com
```

This example returns all LDAP directories that are configured for the contoso.onmicrosoft.com organization.

### Example 2
```powershell
Get-LdapDirectory -Organization contoso.onmicrosoft.com -Id FabrikamLdap
```

This example returns the LDAP directory named FabrikamLdap only in the contoso.onmicrosoft.com organization.

## PARAMETERS

### -Id

> Applicable: Exchange Online

The Id parameter specifies the unique identifier of the LDAP directory configuration that you want to view.

If you don't use this parameter, all configured LDAP directories in the organization are returned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Online

The Organization parameter specifies your organization where the LDAP directory configurations are stored (for example, contoso.onmicrosoft.com). This value identifies your own organization, not the remote directory source that the configuration connects to.

```yaml
Type: OrganizationIdParameter
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

[Set-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/set-ldapdirectory)

[Remove-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/remove-ldapdirectory)
