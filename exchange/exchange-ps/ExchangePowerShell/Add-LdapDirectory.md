---
applicable: Exchange Online
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/add-ldapdirectory
schema: 2.0.0
title: Add-LdapDirectory
---

# Add-LdapDirectory

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Add-LdapDirectory cmdlet to create LDAP directory configurations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-LdapDirectory [-Id] <String> [-Host] <String> [-Port] <Int32> -Organization <OrganizationIdParameter>
 [-BaseDn <String>]
 [-Confirm]
 [-TimeoutSec <Int32>]
 [-UseSsl]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-LdapDirectory -Organization contoso.onmicrosoft.com -Id FabrikamLdap -Host ldap.fabrikam.com -Port 636 -UseSsl
```

This example adds an LDAP directory named FabrikamLdap for the contoso.onmicrosoft.com organization that connects to ldap.fabrikam.com over a secure (SSL/TLS) connection on port 636.

### Example 2
```powershell
Add-LdapDirectory -Organization contoso.onmicrosoft.com -Id FabrikamLdap -Host 10.0.0.25 -Port 389 -BaseDn "OU=Users,DC=fabrikam,DC=com" -TimeoutSec 30
```

This example adds an LDAP directory that connects to the server at 10.0.0.25 on port 389, scopes searches to the specified base distinguished name, and uses a 30-second connection timeout.

## PARAMETERS

### -Id

> Applicable: Exchange Online

The Id parameter specifies the unique identifier of the LDAP directory configuration that you want to create.
```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Host

> Applicable: Exchange Online

The Host parameter specifies the LDAP server host name or IP address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Port

> Applicable: Exchange Online

The Port parameter specifies the port used for LDAP communication. Typical values are 389 for LDAP and 636 for LDAPS.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Online

The Organization parameter specifies your organization where the LDAP directory configuration is created and stored (for example, contoso.onmicrosoft.com).

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

### -BaseDn

> Applicable: Exchange Online

The BaseDn parameter specifies the base distinguished name that scopes LDAP searches. For example, "OU=Users,DC=fabrikam,DC=com".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on whether the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -TimeoutSec

> Applicable: Exchange Online

The TimeoutSec parameter specifies the LDAP connection timeout in seconds. A valid value is an integer between 1 and 300. The default value is 30.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseSsl

> Applicable: Exchange Online

The UseSsl switch specifies that SSL/TLS is used for the connection to the LDAP server. You don't need to specify a value with this switch.

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

### -WhatIf

> Applicable: Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/get-ldapdirectory)

[Set-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/set-ldapdirectory)

[Remove-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/remove-ldapdirectory)
