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

Use the Add-LdapDirectory cmdlet to create a new LDAP directory configuration for a tenant.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Add-LdapDirectory -Organization <String> -Id <String> -Host <String> -Port <Int32>
 [-BaseDn <String>]
 [-TimeoutSec <Int32>]
 [-UseSsl]
 [<CommonParameters>]
```

## DESCRIPTION
Adds an LDAP directory configuration that can be distributed to clients so Outlook can look up recipients' S/MIME certificates from LDAP directories.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Add-LdapDirectory -Organization contoso.com -Id ContosoLdap -Host ldap.contoso.com -Port 636 -UseSsl
```

This example adds an LDAP directory named ContosoLdap for the contoso.com tenant that connects to ldap.contoso.com over a secure (SSL/TLS) connection on port 636.

### Example 2
```powershell
Add-LdapDirectory -Organization contoso.com -Id ContosoLdap -Host 10.0.0.25 -Port 389 -BaseDn "OU=Users,DC=contoso,DC=com" -TimeoutSec 30
```

This example adds an LDAP directory that connects to the server at 10.0.0.25 on port 389, scopes searches to the specified base distinguished name, and uses a 30-second connection timeout.

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

Specifies the unique identifier for the LDAP directory profile.

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

### -Host

> Applicable: Exchange Online

Specifies the LDAP server host name or IP address.

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

### -Port

> Applicable: Exchange Online

Specifies the port used for LDAP communication. Typical values are 389 for LDAP and 636 for LDAPS.

```yaml
Type: Int32
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

Specifies the base distinguished name that scopes LDAP searches.

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

### -TimeoutSec

> Applicable: Exchange Online

Specifies the LDAP connection timeout in seconds.

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

Specifies that SSL/TLS is used for the connection to the LDAP server. You don't need to specify a value with this switch.

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

[Get-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/get-ldapdirectory)

[Set-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/set-ldapdirectory)

[Remove-LdapDirectory](https://learn.microsoft.com/powershell/module/exchangepowershell/remove-ldapdirectory)
