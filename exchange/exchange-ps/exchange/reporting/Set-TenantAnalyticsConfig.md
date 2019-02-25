--
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-TenantAnalyticsConfig
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-TenantAnalyticsConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

**This cmdlet has been deprecated and no longer used.**

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### MyAnalytics
```
Set-TenantAnalyticsConfig -MinRecipients <Int32>
 [<CommonParameters>]
```

### TeamAnalytics
```
Set-TenantAnalyticsConfig -MinTeamSize <Int32> -TeamAnalyticsEnabled <$true | $false>
 [-MinRecipients <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet has been deprecated and no longer used.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/3f34a5c1-350f-4f1f-92dd-d16587a0097b.aspx)
