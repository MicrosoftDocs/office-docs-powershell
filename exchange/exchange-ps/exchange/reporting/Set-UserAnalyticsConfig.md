---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-UserAnalyticsConfig
schema: 2.0.0
---

# Set-UserAnalyticsConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-UserAnalyticsConfig cmdlet to modify the MyAnalytics privacy settings for cloud-based users.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Set-UserAnalyticsConfig -Identity <RecipientIdParameter> -PrivacyMode <String> [<CommonParameters>]
```

### Set2
```
Set-UserAnalyticsConfig -Identity <RecipientIdParameter> [-PrivacyMode <String>]
 -TeamAnalyticsEnabled <$true | $false> [-TeamAnalyticsManagerViewEnabled <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-UserAnalyticsConfig -Identity "Kathleen Reiter" -PrivacyMode OptIn
```

This example sets the MyAnalytics privacy setting to OptIn for the user named Kathleen Reiter.

## PARAMETERS

### -Identity
The Identity parameter specifies the user that you want to modify. You can use any value that uniquely identifies the user. For example:

For example:

- Name

- Display name

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

- Exclude

- OptIn

- OptOut

```yaml
Type: String
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
Type: String
Parameter Sets: Set2
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
Parameter Sets: Set2
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
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online

Required: False
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

[Online Version](https://technet.microsoft.com/library/f8f0b66c-dcd2-43ef-88f0-0cc760ce7602.aspx)
