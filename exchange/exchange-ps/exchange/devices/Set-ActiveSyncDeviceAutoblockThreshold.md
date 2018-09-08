---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2013, Exchange Server 2016
title: Set-ActiveSyncDeviceAutoblockThreshold
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016"
---

# Set-ActiveSyncDeviceAutoblockThreshold

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ActiveSyncDeviceAutoblockThreshold cmdlet to change settings for autoblocking mobile devices.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-ActiveSyncDeviceAutoblockThreshold [-Identity] <ActiveSyncDeviceAutoblockThresholdIdParameter>
 [-AdminEmailInsert <String>] [-BehaviorTypeIncidenceDuration <EnhancedTimeSpan>]
 [-BehaviorTypeIncidenceLimit <Int32>] [-Confirm] [-DeviceBlockDuration <EnhancedTimeSpan>]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Microsoft Exchange and Microsoft Exchange ActiveSync can block Exchange ActiveSync mobile devices if these devices display any of a defined list of behaviors that can potentially cause issues with the server. The Set-ActiveSyncDeviceAutoblockThreshold cmdlet can modify an existing autoblock threshold rule and change a variety of settings including the duration of blocking.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ActiveSyncDeviceAutoblockThreshold -Identity "UserAgentChanges" BehaviorTypeIncidenceLimit 2 -BehaviorTypeIncidenceDuration 1440 -DeviceBlockDuration 1440 -AdminEmailInsert "<B>Your device has been blocked.</B> "]
```

This example sets the autoblock threshold rule UserAgentChanges with several settings. It limits the number of accepted UserAgent changes to 2, specifies that the incidence duration is 1440 minutes and blocks the mobile device for 1440 minutes. Lastly, it inserts a message into the administrative email message sent to the user.

### -------------------------- Example 2 --------------------------
```
Set-ActiveSyncDeviceAutoblockThreshold -Identity "RecentCommands" BehaviorTypeIncidenceLimit 5 -BehaviorTypeIncidenceDuration 720 -DeviceBlockDuration 720 -AdminEmailInsert "<B>Your device has been blocked.</B> "]
```

This example sets the autoblock threshold rule RecentCommands with several settings. It limits the number of accepted RecentCommands changes to 5, specifies that the incidence duration is 720 minutes and blocks the mobile device for 720 minutes. Lastly, it inserts a message into the administrative email message sent to the user.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the autoblock threshold rule.

```yaml
Type: ActiveSyncDeviceAutoblockThresholdIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdminEmailInsert
The AdminEmailInsert parameter specifies the text to include in the email sent to the user when a mobile device triggers an autoblock threshold rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BehaviorTypeIncidenceDuration
The BehaviorTypeIncidenceDuration parameter specifies the interval (in minutes) within which the BehaviorType must occur to trigger the autoblock rule.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BehaviorTypeIncidenceLimit
The BehaviorTypeIncidenceLimit parameter specifies the number of occurrences of the behavior type needed to trigger blocking.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeviceBlockDuration
The DeviceBlockDuration parameter specifies the length of time (in minutes) that the mobile device is blocked.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/2710ccb0-9e18-4906-acd1-e97be05d57cd.aspx)
