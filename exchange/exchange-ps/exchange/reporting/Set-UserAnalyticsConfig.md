---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-UserAnalyticsConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Set-UserAnalyticsConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-UserAnalyticsConfig cmdlet to modify the MyAnalytics privacy settings for cloud-based users.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### MyAnalytics
```
Set-UserAnalyticsConfig -Identity <RecipientIdParameter> -PrivacyMode <String>
 [<CommonParameters>]
```

### TeamAnalytics
```
Set-UserAnalyticsConfig -Identity <RecipientIdParameter> -TeamAnalyticsEnabled <$true | $false>
 [-PrivacyMode <String>]
 [-TeamAnalyticsManagerViewEnabled <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-UserAnalyticsConfig -Identity "Kathleen Reiter" -PrivacyMode OptIn
```

This example sets the MyAnalytics privacy setting to OptIn for the user named Kathleen Reiter.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to modify. You can use any value that uniquely identifies the user. For example: For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PrivacyMode
The PrivacyMode parameter specifies the MyAnalytics privacy setting for the user. Valid values are:

- Excluded

- Opt-In

- Opt-Out

```yaml
Type: String
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
Type: String
Parameter Sets: TeamAnalytics
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -TeamAnalyticsEnabled
PARAMVALUE: $true | $false

```yaml
Type: $true | $false
Parameter Sets: TeamAnalytics
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamAnalyticsManagerViewEnabled
PARAMVALUE: $true | $false

```yaml
Type: $true | $false
Parameter Sets: TeamAnalytics
Aliases:
Applicable: Exchange Online

Required: False
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

[Online Version](https://docs.microsoft.com/powershell/module/exchange/reporting/set-useranalyticsconfig)
