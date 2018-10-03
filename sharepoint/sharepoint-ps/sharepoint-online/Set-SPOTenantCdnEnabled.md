---
external help file: 
applicable: SharePoint Online
title: Set-SPOTenantCdnEnabled
schema: 2.0.0
---

# Set-SPOTenantCdnEnabled

## SYNOPSIS
Enables or disables Public content delivery network (CDN) or Private CDN on the tenant level. 


## SYNTAX

```
Set-SPOTenantCdnEnabled [-CdnType <SPOTenantCdnTypeClient>] [-Confirm] [-Enable <Boolean>] [-NoDefaultOrigins]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Enables or disables Public content delivery network (CDN) or Private CDN on the tenant level. 


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Set-SPOTenantCdnEnabled -CdnType public -Enable $true
```

The example enables a CDN.


## PARAMETERS

### -CdnType
Specifies the CDN type. The valid values are: public or private.


```yaml
Type: SPOTenantCdnTypeClient
Parameter Sets: (All)
Aliases: 
Accepted values: Public, Private, Both
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
Specifies if the CDN is enabled.

The valid values are: $True and $False.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoDefaultOrigins
PARAMVALUE: SwitchParameter


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Set-SPOTenantCdnEnabled](Set-SPOTenantCdnEnabled.md)
