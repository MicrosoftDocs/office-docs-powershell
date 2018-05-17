---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsRgsAgentGroup
schema: 2.0.0
---

# Remove-CsRgsAgentGroup

## SYNOPSIS
Removes an existing Response Group agent group.
An agent group is a collection of agents assigned to a Response Group queue.
Agents are the users assigned to answer calls directed to a particular queue.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsRgsAgentGroup [-Force] [-WhatIf] [-Confirm] -Instance <AgentGroup> [<CommonParameters>]
```

## DESCRIPTION
When someone calls a phone number associated with the Response Group application, the service starts by determining which workflow corresponds to the number called.
Based on the configuration of that workflow, the call might be routed to a set of interactive voice response (IVR) questions (in which the caller is asked one or more questions along the lines of "Is this question about hardware support or software support?").
Alternatively, the call might be placed in a Response Group queue; there the caller will remain on hold until someone is available to answer the call.
The people designated to answer calls are known as agents and a collected group of agents are referred to as a Response Group agent group.
Agent groups are associated with workflows and are further associated with like job responsibilities; for example, help desk personnel might be grouped in the Help Desk agent group while customer support agents might be grouped in the Customer Support agent group.

New agent groups are created by using the `New-CsRgsAgentGroup` cmdlet.
If you need to delete an agent group, this can be done by calling the `Remove-CsRgsAgentGroup` cmdlet.
Note that this cmdlet deletes the entire group and all the agents in that group.
If you only want to remove a single agent from a group, use the `Set-CsRgsAgentGroup` cmdlet instead.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Remove-CsRgsAgentGroup
```

The command shown in Example 1 deletes all the Response Group agent groups configured for use on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first uses `Get-CsRgsAgentGroup` to return all the agent groups for ApplicationServer:atl-cs-001.litwareinc.com.
Those groups are then piped to and removed by, the `Remove-CsRgsAgentGroup` cmdlet.


### -------------------------- Example 2 ------------------------
```
Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" | Remove-CsRgsAgentGroup
```

In Example 2, a single Response Group agent group is removed: the group named Help Desk.
To do this, `Get-CsRgsAgentGroup` is first used to return the Help Desk agent group (-Name "Help Desk") from ApplicationServer:atl-cs-001.litwareinc.com.
This group is then piped to `Remove-CsRgsAgentGroup`, which removes the group from the service.


### -------------------------- Example 3 ------------------------
```
Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.RoutingMethod -ne "RoundRobin"} | Remove-CsRgsAgentGroup
```

Example 3 deletes all the Response Group agent groups on ApplicationServer:atl-cs-001.litwareinc.com that do not use the round robin routing method.
To do this, `Get-CsRgsAgentGroup` is first called in order to return a collection of all the agent groups found on the service ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those groups where the RoutingMethod property is not equal to (-ne) RoundRobin.
The filtered collection is then piped to `Remove-CsRgsAgentGroup`, which deletes each item in that collection.


## PARAMETERS

### -Force
Forces removal of the agent group.
If this parameter is present, the agent group will be deleted without warning, even if it is used by an active workflow.
If this parameter is not present, then you will be asked to confirm the deletion of any agent group currently being used by an active workflow.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Object reference pointing to the agent group to be removed.
When piping workflow objects to `Remove-CsRgsAgentGroup` you can leave off the Instance parameter.

To use the Instance parameter use commands similar to this:

`$x = Get-CsRgsAgentGroup -Identity ApplicationServer:atl-cs-001.litwareinc.com /1987d3c2-4544-489d-bbe3-59f79f530a83`

`Remove-CsRgsAgentGroup -Instance $x`

Note that you can only remove a single agent group at a time when using the Instance parameter.
That means that your object reference ($x) cannot contain multiple agent group objects.


```yaml
Type: AgentGroup
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup object.
`Remove-CsRgsAgentGroup` accepts pipelined instances of the Response Group agent group object.

## OUTPUTS

###  
`Remove-CsRgsAgentGroup` deletes existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup object.

## NOTES

## RELATED LINKS

[Get-CsRgsAgentGroup](Get-CsRgsAgentGroup.md)

[New-CsRgsAgentGroup](New-CsRgsAgentGroup.md)

[Set-CsRgsAgentGroup](Set-CsRgsAgentGroup.md)

