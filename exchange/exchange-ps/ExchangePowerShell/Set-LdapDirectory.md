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

Use the Set-LdapDirectory cmdlet to update an existing LDAP directory configuration.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-LdapDirectory -Organization <String> -Id <String>
 [-BaseDn <String>]
 [-Host <String>]
 [-Port <Int32>]
 [-TimeoutSec <Int32>]
 [-UseSsl]
 [-NoSsl]
 [<CommonParameters>]
```

## DESCRIPTION
Updates properties of an existing LDAP directory configuration, such as the BaseDn or connection settings.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-LdapDirectory -Organization contoso.com -Id ContosoLdap -BaseDn "OU=Employees,DC=contoso,DC=com"
```

This example updates the base distinguished name that scopes searches for the LDAP directory named ContosoLdap.

### Example 2
```powershell
Set-LdapDirectory -Organization contoso.com -Id ContosoLdap -Host ldap2.contoso.com -Port 636 -UseSsl -TimeoutSec 45
```

This example updates the connection settings for the LDAP directory named ContosoLdap to use a new host over a secure (SSL/TLS) connection on port 636 with a 45-second timeout.

### Example 3
```powershell
Set-LdapDirectory -Organization contoso.com -Id ContosoLdap -Host ldap.contoso.com -Port 389 -NoSsl
```

This example disables SSL/TLS for the LDAP directory named ContosoLdap by using the NoSsl switch, and updates the connection to use the non-secure LDAP port 389.

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

Specifies the unique identifier of the LDAP directory to update.

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

### -BaseDn

> Applicable: Exchange Online

Specifies the base distinguished name to use after the update.

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

### -Host

> Applicable: Exchange Online

Specifies the LDAP server host name or IP address after the update.

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

### -Port

> Applicable: Exchange Online

Specifies the LDAP port after the update.

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

Specifies the timeout value in seconds after the update.

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

Specifies that SSL/TLS is enabled for the updated connection settings. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoSsl

> Applicable: Exchange Online

Specifies that SSL/TLS is disabled for the updated connection settings. Use this switch to turn off a secure connection that was previously enabled (for example, with the UseSsl switch). You don't need to specify a value with this switch.

You can't use this switch with the UseSsl switch in the same command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
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
