---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsRgsAgentGroup
schema: 2.0.0
---

# Set-CsRgsAgentGroup

## SYNOPSIS
Modifies an existing Response Group agent group.
An agent group is a collection of agents assigned to a Response Group queue.
Agents are the users assigned to answer calls directed to a particular queue.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsRgsAgentGroup [-Instance] <AgentGroup> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When someone calls a phone number associated with the Response Group application, the service starts by determining which workflow corresponds to the number called.
Based on the configuration of that workflow, the call might be routed to a set of interactive voice response (IVR) questions (in which the caller is asked one or more questions along the lines of "Is this question about hardware support or software support?").
Alternatively, the call might be placed in a Response Group queue; there the caller will be put on hold until a designated person is available to answer the call.
The people designated to answer calls are known as agents and a collected group of agents are referred to as a Response Group agent group.
Agent groups are associated with workflows and are further associated with like job responsibilities: help desk personnel might be grouped in the Help Desk agent group while customer support agents might be grouped in the Customer Support agent group.

New agent groups are created by using the `New-CsRgsAgentGroup` cmdlet.
If you need to make changes to an agent group after it has been created, use the `Set-RgsAgentGroup` cmdlet; among other things, this cmdlet can be used to add and remove individual agents from a group.
Note that `Set-CsRgsAgentGroup` does not directly modify the properties of an agent group.
If you need to modify a group, you must first create an object reference to that group; this is done by calling `Get-CsRgsAgentGroup` to retrieve the group and then storing the returned object in a variable.
After the object reference has been created, you then make changes to the group properties in memory.
When you have finished making your modifications, you must then call `Set-CsRgsAgentGroup` to write the changes to the actual Response Group agent group.
If you do not call `Set-CsRgsAgentGroup`, your changes will exist in memory only and will disappear as soon as you close Windows PowerShell or delete the object reference variable.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
$x = Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$x.RoutingMethod = "RoundRobin"

Set-CsRgsAgentGroup -Instance $x
```

The commands shown in Example 1 modify the RoutingMethod property for the Response Group agent group Help Desk (found on the service ApplicationServer:atl-cs-001.litwareinc.com).
To perform this task, the command first uses the `Get-CsRgsAgentGroup` cmdlet to retrieve the Help Desk agent group (-Name "Help Desk") from ApplicationServer:atl-cs-001.litwareinc.com.
After retrieval, the agent group object is stored in a variable named $x.

Command 2 in the example modifies the value of the RoutingMethod property.
In the final command in the example, the `Set-CsRgsAgentGroup` cmdlet is used to write these changes to the actual Help Desk agent group.


### -------------------------- Example 2 ------------------------
```
$x = Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$x.DistributionGroupAddress = "helpdesk@litwareinc.com"

Set-CsRgsAgentGroup -Instance $x
```

Example 2 shows how you can change the distribution group assigned to a Response Group agent group.
This is done by first using `Get-CsRgsAgentGroup` to return the agent group to be modified; in this example, that's the Help Desk group (-Name "Help Desk ") found on the service ApplicationServer:atl-cs-001.litwareinc.com.
After `Get-CsRgsAgentGroup` returns this group, the resulting object is stored in a variable named $x.

The second command in the example assigns a new value (helpdesk@litwareinc.com) to the DistributionGroupAddress property.
After the new value has been assigned, `Set-CsRgsAgentGroup` is then used to write the changes to the Help Desk agent group on ApplicationServer:atl-cs-001.litwareinc.com.


### -------------------------- Example 3 ------------------------
```
$x = Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$x.AgentsByUri.Add("sip:kenmyer@litwareinc.com")

Set-CsRgsAgentGroup -Instance $x
```

The commands shown in Example 3 add a new agent to the Response Group agent group Help Desk.
To do this, the example first uses `Get-CsRgsAgentGroup` to return the Help Desk group (-Name "Help Desk") from the service ApplicationServer:atl-cs-001.litwareinc.com.
The retrieved object is stored on a variable named $x.

In the second command, the Add method is used to add a new agent to the AgentsByUri property; this is done by specifying the SIP address of the new agent ("sip:kenmyer@litwareinc.com").
In command 3, the `Set-CsRgsAgentGroup` is used to write the changes (that is, the addition of the new agent) to the Help Desk group.
Note that if you do not call `Set-CsRgsAgentGroup`, the changes will be made in memory only, and will not be applied to the actual agent group.


### -------------------------- Example 4 ------------------------
```
$x = Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$x.AgentsByUri.Remove("sip:kenmyer@litwareinc.com")

Set-CsRgsAgentGroup -Instance $x
```

In Example 4, an agent is removed from the Response Group agent group Help Desk found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the example first uses `Get-CsRgsAgentGroup` to return the Help Desk group (-Name "Help Desk") from ApplicationServer:atl-cs-001.litwareinc.com.
The retrieved agent group object is stored in a variable named $x.

After the agent group has been retrieved, the Remove method is used remove an agent (the agent with the SIP address "sip:kenmyer@litwareinc.com") from the group.
In command 3, the `Set-CsRgsAgentGroup` is then called to write the changes (in other words, to remove the agent) from the group.
If you do not call `Set-CsRgsAgentGroup`, the changes will be made in memory only and will not be applied to the actual agent group; the agent will be removed only if you call `Set-CsRgsAgentGroup`.


## PARAMETERS

### -Instance
Object reference to the Response Group agent group to be modified.
An object reference is typically retrieved by using the `Get-CsRgsAgentGroup` cmdlet and assigning the returned value to a variable; for example, this command returns an object reference to the Help Desk agent group and stores that object reference in a variable named $x:

`$x = Get-CsRgsAgentGroup -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"`


```yaml
Type: AgentGroup
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup object.
`Set-CsRgsAgentGroup` accepts pipelined instances of the Response Group agent group object.

## OUTPUTS

###  
`Set-CsRgsAgentGroup` does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.AgentGroup object.

## NOTES

## RELATED LINKS

[Get-CsRgsAgentGroup](Get-CsRgsAgentGroup.md)

[New-CsRgsAgentGroup](New-CsRgsAgentGroup.md)

[Remove-CsRgsAgentGroup](Remove-CsRgsAgentGroup.md)

