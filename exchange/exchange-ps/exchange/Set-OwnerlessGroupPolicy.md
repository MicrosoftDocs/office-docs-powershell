---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/set-ownerlessgrouppolicy
applicable: Exchange Online
title: Set-OwnerlessGroupPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
---

# Set-OwnerlessGroupPolicy

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Set-OwnerlessGroupPolicy cmdlet to modify the ownerless group policy in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OwnerlessGroupPolicy -Enabled <Boolean> -NoOfWeeksToNotify <Int32> -MaxNoOfMembersToNotify <Int32> -SenderEmailAddress <String>
 [-BatchRequests]
 [-EnabledGroupIds <String[]>]
 [-ResultSize <Unlimited>]
 [-UseMultithreading]
 [<CommonParameters>]
```

## DESCRIPTION
Using the cmdlet you can enable or disable the ownerless group policy for Microsoft 365 Groups on a tenant. You can also configure additional parameters as part of the policy including sender email address, number of weeks you want to notify active members of ownerless groups and number of members within a ownerless group you want to notify. Optionally you can also specify the specific groups you want to enable this policy on if needed. 

## EXAMPLES

### Example 1
 Set-OwnerlessGroupPolicy -enabled $true 
 -senderEmailAddress admin@contoso.com 
 -noOfWeeksToNotify 5 
 -maxNoOfMembersToNotify 5 
 -enabledGroupIds 1b390686-a8fc-4a2d-b31f-62670552fc99, 4596bdbe-d3c9-4d7b-aa34-a811b76a1366 
```

{{ Add example description here }}

## PARAMETERS

### -Enabled
The Enabled parameter enables or disables the ownerless group policy. Valid values are:

- $true: The policy is enabled.
- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxNoOfMembersToNotify
The MaxNoOfMembersToNotify parameter specifies the maximum number of active members to notify in a ownerless group. A valid value is an integer.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoOfWeeksToNotify
The NoOfWeeksToNotify parameter specifies the number of weeks to notify the active members specified by the MaxNoOfMembersToNotify parameter. A valid value is an integer from 1 to 90.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SenderEmailAddress
The SenderEmailAddress specifies the From address to use for notification messages.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -EnabledGroupIds
{{ Fill EnabledGroupIds Description }}

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMultithreading
{{ Fill UseMultithreading Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
