---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-TenantAnalyticsConfig
schema: 2.0.0
---

# Set-TenantAnalyticsConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-TenantAnalyticsConfig cmdlet to modify the minimum number of recipients that are required for MyAnalytics to show email statistics.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Set-TenantAnalyticsConfig -MinRecipients <Int32> [<CommonParameters>]
```

### Set2
```
Set-TenantAnalyticsConfig [-MinRecipients <Int32>] -MinTeamSize <Int32> -TeamAnalyticsEnabled <$true | $false>
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-TenantAnalyticsConfig -MinRecipients 10
```

This example configures the minimum number of recipients required by MyAnalytics to 10 recipients.

## PARAMETERS

### -MinRecipients
The MinRecipients parameter specifies the minimum number of recipients required for MyAnalytics to show email statistics. The default value is 5.

```yaml
Type: Int32
Parameter Sets: Set1
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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MinTeamSize
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamAnalyticsEnabled
PARAMVALUE: $true | $false

```yaml
Type: $true | $false
Parameter Sets: Set2
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

