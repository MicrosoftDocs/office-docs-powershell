---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsRgsAgentGroup
schema: 2.0.0
---

# Get-CsRgsAgentGroup

## SYNOPSIS
Returns information about the Response Group agent groups configured for use in your organization.
An agent group is a collection of agents assigned to a Response Group queue.
Agents are the users assigned to answer calls directed to a queue.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsRgsAgentGroup [[-Identity] <RgsIdentity>] [-Name <String>] [-Owner <RgsIdentity>] [-ShowAll]
 [<CommonParameters>]
```

## DESCRIPTION
When someone calls a phone number associated with the Response Group application, the application first determines the workflow that corresponds to the number called.
Based on the configuration of that workflow, the call might be routed to a set of interactive voice response (IVR) questions (in which the caller is asked one or more questions along the lines of "Is this question about hardware support or software support?").
Alternatively, the call might be placed in a Response Group queue; there the caller will be put on hold until a designated person is available to answer the call.
The people designated to answer calls are known as agents, and a collected set of agents are referred to as a Response Group agent group.
Agent groups are associated with workflows, and are further associated with similar job responsibilities: help desk personnel might be grouped in the Help Desk agent group while customer support agents might be grouped in the Customer Support agent group.

The Get-CsRgsAgentGroup cmdlet provides a way for you to return information about the Response Group agent groups currently in use in your organization, including information about the users who have been assigned to each agent group.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsRgsAgentGroup
```

Example 1 returns all the Response Group agent groups configured for use in the organization.
This is done by calling Get-CsRgsAgentGroup without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com
```

The command shown in Example 2 returns all the Response Group agent groups configured for use on the service ApplicationServer:atl-cs-001.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"
```

The command shown in Example 3 returns a single Response Group agent group: the group named Help Desk found on the service ApplicationServer:atl-cs-001.litwareinc.com.

### -------------------------- Example 4 --------------------------
```
Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.RoutingMethod -eq "RoundRobin"}
```

In Example 4, information is returned for all the Response Group agent groups on the service ApplicationServer:atl-cs-001.litwareinc.com, provided those groups use the round robin routing method.
To do this, the command first uses Get-CsRgsAgentGroup to return a collection of all the agent groups on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those groups where the RoutingMethod property is equal to "RoundRobin".

### -------------------------- Example 5 --------------------------
```
Get-CsRgsAgentGroup -Identity Service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.RoutingMethod -ne "RoundRobin"}
```

The command used in Example 5 is a variation of the one used in Example 4; in this case, however, information is returned for all the Response Group agent groups on the service ApplicationServer:atl-cs-001.litwareinc.com that do not use the round robin routing method.
To do this, the command starts off by calling Get-CsRgsAgentGroup to return a collection of all the agent groups on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those agent groups where the RoutingMethod property is not equal to "RoundRobin".


## PARAMETERS

### -Identity
Represents either the Identity of the service where the Response Group agent group is hosted or the full Identity of the agent group itself.
If you specify the service Identity (for example, service:ApplicationServer:atl-cs-001.litwareinc.com) then all the agent groups hosted on that service will be returned.
If you specify the Identity of the group, then only the specified agent group will be returned.
Note that the Identity of an agent group consists of the service Identity followed by a globally unique identifier (GUID); for example: service:ApplicationServer:atl-cs-001.litwareinc.com/1987d3c2-4544-489d-bbe3-59f79f530a83.

An alternate way to return a single group is to specify the service Identity, then include the Name parameter and the agent group name.
That enables you to retrieve a specific agent group without having to know the GUID assigned to that group.

If called without any parameters, Get-CsRgsAgentGroup returns a collection of all the agent groups configured for use in your organization.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Unique name given to the agent group at the time the group was created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Fully qualified domain name of the pool that "owns" the agent group.
The Owner pool ID and the Pool ID of an agent group are typically the same.
However, if a group needs to temporarily be moved (perhaps in a disaster recovery procedure) then the Pool ID will change.
However, the Owner ID will continue to point to the original pool.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAll
When present, shows all the Response Group agent groups, including those groups where the Owner pool ID and the Pool ID are different.
By default, Get-CsRgsAgentGroup only returns information about agent groups where the Owner pool ID and the Pool ID are identical.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### String
A string value representing the Identity of the Response Group agent group.


## OUTPUTS

### Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup


## NOTES


## RELATED LINKS

[New-CsRgsAgentGroup]()

[Remove-CsRgsAgentGroup]()

[Set-CsRgsAgentGroup]()