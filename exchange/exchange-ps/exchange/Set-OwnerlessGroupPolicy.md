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
 [-EnabledGroupIds <String[]>]
 [-ResultSize <Unlimited>]
```

## DESCRIPTION
Use this cmdlet to enable or disable the ownerless group policy for Microsoft 365 Groups in your organization. You can also configure additional policy settings, including sender email address, the number of weeks that you want to notify active members of ownerless groups, and the number of members within a ownerless group that you want to notify. Optionally, you can also specify the Microsoft 365 Groups that you want to enable this policy on.

## EXAMPLES

### Example 1
```powershell
 Set-OwnerlessGroupPolicy -Enabled $true -SenderEmailAddress admin@contoso.com -NoOfWeeksToNotify 5 -MaxNoOfMembersToNotify 5 -EnabledGroupIds 1b390686-a8fc-4a2d-b31f-62670552fc99, 4596bdbe-d3c9-4d7b-aa34-a811b76a1366
```

This example configures the ownerless group policy with the specified settings.

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
The MaxNoOfMembersToNotify parameter specifies the maximum number of active members to notify in a ownerless group. A valid value is an integer from 1 to 90. 

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
The NoOfWeeksToNotify parameter specifies the number of weeks to notify the active members specified by the MaxNoOfMembersToNotify parameter. A valid value is an integer from 1 to 7. 

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
Optionally, if you dont want to enable the policy on all the groups in your tenant you can specify a small set of comma separated group guids on which you want to enable the policy. A valid value is a list of upto 10 comma separated group guids. 

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

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
