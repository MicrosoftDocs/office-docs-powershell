---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-cscallqueue
applicable: Skype for Business Online
title: New-CsCallQueue
author: tomkau
ms.author: tomkau
manager: bulenteg
ms.reviewer:
schema: 2.0.0
---

# New-CsCallQueue

## SYNOPSIS
Creates new Call Queue in your Skype for Business Online organization.

## SYNTAX

```
New-CsCallQueue -Name <String> [-AgentAlertTime <Int16>] [-AllowOptOut <Boolean>] [-DistributionLists <List>] 
[-Tenant <Guid>] [-UseDefaultMusicOnHold <Boolean>] [-WelcomeMusicAudioFileId <Guid>] [-MusicOnHoldAudioFileId <Guid>] 
[-OverflowAction <Object>] [-OverflowActionTarget <Guid>] [-OverflowThreshold <Int16>] 
[-TimeoutAction <Object>] [-TimeoutActionTarget <Guid>] [-TimeoutThreshold <Int16>] 
[-RoutingMethod <Object>] [-PresenceBasedRouting <Boolean>] [-Users <List>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsCallQueue cmdlet creates a new Call Queue.

## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
New-CsCallQueue -Name "Help Desk" -UseDefaultMusicOnHold $true
```

This example creates a Call Queue for the organization named "Help Desk" using default music on hold.

### -------------------------- Example 2 -------------------------- 
```
New-CsCallQueue -Name "Help desk" -RoutingMethod Attendant -DistributionLists @("8521b0e3-51bd-4a4b-a8d6-b219a77a0a6a", "868dccd8-d723-4b4f-8d74-ab59e207c357") -AllowOptOut $false -AgentAlertTime 30 -OverflowThreshold 15 -OverflowAction Forward -OverflowActionTarget 7fd04db1-1c8e-4fdf-9af5-031514ba1358 -TimeoutThreshold 30 -TimeoutAction Disconnect -MusicOnHoldAudioFileId 1e81adaf-7c3e-4db1-9d61-5d135abb1bcc -WelcomeMusicAudioFileId 0b31bbe5-e2a0-4117-9b6f-956bca6023f8

```

This example creates a Call Queue for the organization named "Help Desk" with music on hold and welcome music audio files.


## PARAMETERS

### -Name
The Name parameter specifies a unique name for the Call Queue.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentAlertTime
The AgentAlertTime parameter represents the time (in seconds) that a call can remain unanswered before it is automatically routed to the next agent. The AgentAlertTime can be set to any integer value between 30 and 180 seconds (3 minutes), inclusive. The default value is 30 seconds.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 30
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowOptOut
The AllowOptOut parameter indicates whether or not agents can opt in or opt out from taking calls from a Call Queue.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionLists
The DistributionLists parameter lets you add all the members of the distribution lists to the Call Queue. This is a list of distribution list GUIDs. A service wide configurable maximum number of DLs per Call Queue are allowed. Only the first N (service wide configurable) agents from all distribution lists combined are considered for accepting the call. Nested DLs are supported. O365 Groups can also be used to add members to the Call Queue.

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MusicOnHoldAudioFileId
The MusicOnHoldFileContent parameter represents music to play when callers are placed on hold. This is the unique identifier of the audio file. This parameter is required if the UseDefaultMusicOnHold parameter is not specified.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowAction
The OverflowAction parameter designates the action to take if the overflow threshold is reached. The OverflowAction property must be set to one of the following three values: DisconnectWithBusy, Forward, and Voicemail.

PARAMVALUE: DisconnectWithBusy | Forward | Voicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: DisconnectWithBusy
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowActionTarget
The OverflowActionTarget parameter represents the target of the overflow action. If the OverFlowAction is set to Forward, this parameter must be set to a Guid. Otherwise, this parameter is optional.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowThreshold
The OverflowThreshold parameter defines the number of calls that can be in the queue at any one time before the overflow action is triggered. The OverflowThreshold can be any integer value between 0 and 200, inclusive. A value of 0 causes calls not to reach agents and the overflow action to be taken immediately

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 50
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingMethod
The RoutingMethod defines how agents will be called in a Call Queue. If the routing method is set to Serial, then agents will be called one at a time. If the routing method is set to Attendant, then agents will be called in parallel.

PARAMVALUE: Attendant | Serial | RoundRobin

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Attendant
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutAction
The TimeoutAction parameter defines the action to take if the timeout threshold is reached. The TimeoutAction property must be set to one of the following three values: Disconnect, Forward, and Voicemail. The default value is Disconnect.

PARAMVALUE: Disconnect | Forward | Voicemail

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: Disconnect
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutActionTarget
The TimeoutActionTarget represents the target of the timeout action. If the TimeoutAction is set to Forward, this parameter must be set to a Guid. Otherwise, this field is optional.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutThreshold
The TimeoutThreshold parameter defines the time (in seconds) that a call can be in the queue before that call times out. At that point, the system will take the action specified by the TimeoutAction parameter. 
The TimeoutThreshold can be any integer value between 0 and 2700 seconds (inclusive), and is rounded to the nearest 15th interval. For example, if set to 47 seconds, then it is rounded down to 45. If set to 0, welcome music is played, and then the timeout action will be taken.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: 1200
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultMusicOnHold
The UseDefaultMusicOnHold parameter indicates that this Call Queue uses the default music on hold. This parameter cannot be specified together with MusicOnHoldAudioFileId.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeMusicAudioFileId
The WelcomeMusicAudioFileId parameter represents the audio file to play when callers are connected with the Call Queue. This is the unique identifier of the audio file.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PresenceBasedRouting
The PresenceBasedRouting parameter indicates whether or not presence based routing will be applied while call being routed to Call Queue agents. When set to False, calls will be routed to agents who have opted in to receive calls, regardless of their presence state. When set to True, opted-in agents will receive calls only when their presence state is Available.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Users
The Users parameter lets you add agents to the Call Queue. This is a list of user GUIDs.

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for Microsoft internal use only.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.CallQueue.Models.CallQueue

## NOTES

## RELATED LINKS
[Create a Phone System Call Queue](https://support.office.com/en-us/article/Create-a-Phone-System-call-queue-67ccda94-1210-43fb-a25b-7b9785f8a061)
