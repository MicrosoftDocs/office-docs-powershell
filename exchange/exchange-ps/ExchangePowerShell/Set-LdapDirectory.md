---
applicable: Exchange Online
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-ldapdirectory
schema: 2.0.0
title: Set-LdapDirectory
---

# Set-LdapDirectory

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-LdapDirectory cmdlet to modify LDAP directory configurations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-LdapDirectory [-Id] <String> -Organization <OrganizationIdParameter>
 [-BaseDn <String>]
 [-Confirm]
 [-Host <String>]
 [-NoSsl]
 [-Port <Int32>]
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
Set-LdapDirectory -Organization contoso.onmicrosoft.com -Id FabrikamLdap -BaseDn "OU=Employees,DC=fabrikam,DC=com"
```

This example updates the base distinguished name that scopes searches for the LDAP directory configuration named FabrikamLdap.

### Example 2
```powershell
Set-LdapDirectory -Organization contoso.onmicrosoft.com -Id FabrikamLdap -Host ldap2.fabrikam.com -Port 636 -UseSsl -TimeoutSec 45
```

This example updates the connection settings for the LDAP directory configuration named FabrikamLdap to use a new host over a secure (SSL/TLS) connection on port 636 with a 45-second timeout.

### Example 3
```powershell
Set-LdapDirectory -Organization contoso.onmicrosoft.com -Id FabrikamLdap -Host ldap.fabrikam.com -Port 389 -NoSsl
```

This example disables SSL/TLS for the LDAP directory configuration named FabrikamLdap by using the NoSsl switch, and updates the connection to use the non-secure LDAP port 389.

## PARAMETERS

### -Id

> Applicable: Exchange Online

The Id parameter specifies the unique identifier of the LDAP directory configuration that you want to modify.

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

### -Organization

> Applicable: Exchange Online

The Organization parameter specifies the organization where you want to modify the LDAP directory: your current organization (for example, contoso.onmicrosoft.com) or a remote organization that you also manage.

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

### -Host

> Applicable: Exchange Online

The Host parameter specifies the LDAP server host name or IP address.

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

### -NoSsl

> Applicable: Exchange Online

The NoSsl switch specifies that SSL/TLS is disabled for the updated connection settings. You don't need to specify a value with this switch.

Use this switch to turn off a secure connection that was previously enabled (for example, with the UseSsl switch).

You can't use this switch with the UseSsl switch in the same command.

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

### -Port

> Applicable: Exchange Online

The Port parameter specifies the port used for LDAP communication. Typical values are 389 for LDAP and 636 for LDAPS.

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

The UseSsl switch specifies that SSL/TLS is enabled for the updated connection settings. You don't need to specify a value with this switch.

You can't use this switch with the NoSsl switch in the same command.

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

[Add-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/add-ldapdirectory)

[Get-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/get-ldapdirectory)

[Remove-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/remove-ldapdirectory)
