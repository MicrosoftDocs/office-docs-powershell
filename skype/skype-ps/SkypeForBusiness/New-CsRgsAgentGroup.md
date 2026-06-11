---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Rgs.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csrgsagentgroup
schema: 2.0.0
title: New-CsRgsAgentGroup
---

# New-CsRgsAgentGroup

## SYNOPSIS

Creates a new Response Group agent group.
An agent group is a collection of agents assigned to a Response Group queue.
Agents are the users assigned to answer calls directed to a particular queue.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsAgentGroup [-Parent] <RgsIdentity> -Name <String> [-AgentAlertTime <Int16>]
 [-AgentsByUri <System.Collections.ObjectModel.Collection`1[System.Uri]>] [-Description <String>]
 [-DistributionGroupAddress <String>] [-ParticipationPolicy <ParticipationPolicy>]
 [-RoutingMethod <RoutingMethod>] [-Force] [-InMemory] [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

When someone calls a phone number associated with the Response Group application, the application first determines which workflow corresponds to the number called.
Based on the configuration of that workflow, the call might be routed to a set of interactive voice response (IVR) questions (in which the caller is asked one or more questions along the lines of "Is this question about hardware support or software support?").
Alternatively, the call might be placed in a Response Group queue; there the caller will be put on hold until a designated person is available to answer the call.
The people designated to answer calls are known as agents, and a collected group of agents are referred to as a Response Group agent group.
Agent groups are associated with queues, and are further associated with similar job responsibilities: help desk personnel might be grouped in the Help Desk agent group while customer support agents might be grouped in the Customer Support agent group.

If multiple groups are assigned to a queue, the Response Group application will start by ringing all the available agents in the first group assigned to that queue.
If none of those agents answer, the application will then start ringing all the available agents in the next group assigned to the queue.

New agent groups are created by using the New-CsRgsAgentGroup cmdlet.



## EXAMPLES

### EXAMPLE 1
```

New-CsRgsAgentGroup -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Group"
```

The command shown in Example 1 creates a new Response Group agent group named Help Desk Group; this new group is located on the service ApplicationServer:atl-cs-001.litwareinc.com.
To create the group, the command calls New-CsRgsAgentGroup along with the Parent and Name parameters.
In this example, no other group parameters are specified, meaning the group will use all the default property values.
Because no agents have been assigned to this group any calls routed to the new agent group will automatically be disconnected.


### EXAMPLE 2
```

New-CsRgsAgentGroup -Parent service: ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Group" -AgentsByUri "sip:kenmyer@litwareinc.com","sip:pilarackerman@litwareinc.com"
```

In Example 2, a new Response Group agent group is created and, at the same time, a pair of agents is assigned to that group.
To do this, the command calls New-CsRgsAgentGroup along with the parameters Parent and Name.
In addition, this example also includes the parameter AgentsByUri, accompanied by the parameter value "sip:kenmyer@litwareinc.com","sip:pilarackerman@litwareinc.com".
This value is a comma-separated list of the SIP addresses to be added to the agent group.


## PARAMETERS

### -AgentAlertTime

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Represents the amount of time (in seconds) that a call can remain unanswered before it is automatically routed to the next agent.
The AgentAlertTime can be set to any integer value between 10 and 600 seconds (10 minutes), inclusive.
The default value is 20 seconds.
Note: The Agent alert time setting cannot exceed 180 seconds.
If it exceeds 180 seconds, the client application will reject the call due to the SIP transaction timer reaching its maximum wait time.
To avoid this, set the Alert Time value to less than 180 seconds.



```yaml
Type: Int16
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AgentsByUri

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

**Below Content Applies To:** Lync Server 2010

Enables you to individually add agents to an agent group.
New agents are identified using their SIP addresses.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to individually add agents to an agent group.
New agents are identified using their SIP addresses.

Note that you can only select users who have been enabled for Enterprise Voice.



```yaml
Type: System.Collections.ObjectModel.Collection`1[System.Uri]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables administrators to provide additional, explanatory information about the agent group.
For example, the Description might contain information about who to contact if the group does not receive the expected phone calls.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionGroupAddress

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to add all the members of a distribution group to an agent group.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Unique name to be assigned to the agent group.
The combination of the Parent property and the Name property enables you to uniquely identify agent groups without having to refer to the group's globally unique identifier (GUID).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Service where the new agent group will be hosted.
For example: `-Parent "service:ApplicationServer:atl-cs-001.litwareinc.com".`

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ParticipationPolicy

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Indicates whether or not agents are required to formally sign on to the system in order to receive phone calls intended for the group.
If ParticipationPolicy is set to Informal (the default value) sign-in is not required.
If ParticipationPolicy is set to Formal then sign-in is required.

```yaml
Type: ParticipationPolicy
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingMethod

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Specifies the method used to route new calls to agents.
The RoutingMethod must be set to one of the following values:

LongestIdle - Calls are routed to the agent who has been idle (that is, not involved in a Skype for Business activity) for the longest period of time.

RoundRobin - Calls are routed to the next agent on the list.

Serial - Calls are always routed to the first agent on the list, and are only routed to other agents if this person is not available or does not answer within the allotted time.

Parallel - Calls are routed to all agents at the same time, except for agents whose presence status indicates that they are in a call or otherwise unavailable.

Attendant - Calls are routed to all agents at the same time, even if the agent's presence status indicates that he or she is in a call or otherwise unavailable.
The only exception occurs when an agent has set his or her presence to Do Not Disturb.

The default routing method is Parallel.



```yaml
Type: RoutingMethod
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None
New-CsRgsAgentGroup does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup
New-CsRgsAgentGroup creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup object.

## NOTES

## RELATED LINKS

[Get-CsRgsAgentGroup](Get-CsRgsAgentGroup.md)

[Remove-CsRgsAgentGroup](Remove-CsRgsAgentGroup.md)

[Set-CsRgsAgentGroup](Set-CsRgsAgentGroup.md)
