---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-tenantanalyticsconfig
applicable: Exchange Online
title: Set-TenantAnalyticsConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-TenantAnalyticsConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**This cmdlet has been deprecated and no longer used.**

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### MyAnalytics
```
Set-TenantAnalyticsConfig -MinRecipients <Int32>
 [<CommonParameters>]
```

### TeamAnalytics
```
Set-TenantAnalyticsConfig -MinTeamSize <Int32> -TeamAnalyticsEnabled <Boolean>
 [-MinRecipients <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet has been deprecated and no longer used.

## EXAMPLES

### Example 1
```powershell
Set-TenantAnalyticsConfig
```

This cmdlet has been deprecated and no longer used.

## PARAMETERS

### -MinRecipients
This cmdlet has been deprecated and no longer used.

```yaml
Type: Int32
Parameter Sets: MyAnalytics
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: Int32
Parameter Sets: TeamAnalytics
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MinTeamSize
This cmdlet has been deprecated and no longer used.

```yaml
Type: Int32
Parameter Sets: TeamAnalytics
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamAnalyticsEnabled
This cmdlet has been deprecated and no longer used.

```yaml
Type: Boolean
Parameter Sets: TeamAnalytics
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
