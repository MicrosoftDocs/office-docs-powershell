---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsRgsWorkflow
schema: 2.0.0
---

# Remove-CsRgsWorkflow

## SYNOPSIS
Deletes an existing Response Group workflow.
Workflows determine the actions that are taken when the Response Group application receives a phone call.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsRgsWorkflow [-Instance] <Workflow> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Workflows are a key element in the Response Group application.
Each workflow is uniquely associated with a phone number; when someone calls that number, the workflow determines how the call will be handled.
For example, the call might be routed to a series of interactive voice response (IVR) questions that prompt the caller to enter additional information ("Press 1 for hardware support.
Press 2 for software support.") Alternatively, the call might be placed in a queue and the caller placed on hold until an agent is available to answer the call.
The availability of agents to answer calls is also dictated by the workflow: workflows are used to maintain both the business hours (the days of the week and the times of day when agents are available to answer calls) and the holidays (days when no agents are available to answer calls).

New workflows are created by using the `New-CsRgsWorkflow` cmdlet.
After these workflows have been created, they can later be deleted by using `Remove-CsRgsWorkflow`.
Note that, when you delete a workflow, the workflow is completely removed from the Response Group application.
If you want to temporarily disable a workflow, don't use `Remove-CsRgsWorkflow`; instead, use the `Set-CsRgsWorkflow` cmdlet to disable (and then later re-enable) the workflow.

If you try to delete an active workflow, `Remove-CsRgsWorkflow` will prompt you to verify that you really want to delete the workflow; `Remove-CsRgsWorkflow` will take no further action until you respond to the prompt.
To bypass this prompt and to silently delete an active workflow, use the Force parameter.
For example:

`Get-CsRgsWorkflow -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com " | Remove-CsRgsWorkflow -Force`


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Get-CsRgsWorkflow -Identity Service:ApplicationServer:atl-cs-001.litwareinc.com | Remove-CsRgsWorkflow
```

Example 1 removes all the Response Group workflows from the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first calls `Get-CsRgsWorkflow` to return a collection of all the workflows found on ApplicationServer:atl-cs-001.litwareinc.com.
That collection is then piped to `Remove-CsRgsWorkflow`, which deletes each workflow in the collection.


### -------------------------- Example 2 ------------------------
```
Get-CsRgsWorkflow service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Workflow" | Remove-CsRgsWorkflow
```

The command shown in Example 2 deletes a single Response Group workflow: the workflow named "Help Desk Workflow" located on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, `Get-CsRgsWorkflow` is first used to return the workflow named Help Desk Workflow from the service ApplicationServer:atl-cs-001.litwareinc.com.
That workflow is then piped to and deleted by, `Remove-CsRgsWorkflow`.


### -------------------------- Example 3 ------------------------
```
Get-CsRgsWorkflow service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.Language -eq "en-us"} | Remove-CsRgsWorkflow
```

Example 3 deletes all the United States (U.S.) English language workflows from the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, `Get-CsRgsWorkflow` is first used to retrieve all workflows found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the `Where-Object` cmdlet, which selects only those workflows where the language is equal to U.S.
English (en-us).
This filtered collection is then piped to the `Remove-CsRgsWorkflow` cmdlet, which deletes each item in the collection.


### -------------------------- Example 4 ------------------------
```
Get-CsRgsWorkflow service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.CustomMusicOnHoldFile -ne $Null} | Remove-CsRgsWorkflow
```

The command shown in Example 4 deletes all the Response Group workflows on the service ApplicationServer:atl-cs-001.litwareinc.com that have a value configured for the CustomMusicOnHoldFile property.
In order to accomplish this, the command first uses `Get-CsRgsWorkflow` to return a collection of all the workflows found on ApplicationServer:atl-cs-001.litwareinc.com.
That collection is then piped to the `Where-Object` cmdlet, which selects only those workflows where the CustomMusicOnHoldFile property is not equal to a null value.
(If the property is not equal to a null value, that means that custom music has been defined for this workflow.) The filtered collection is then piped to `Remove-CsRgsWorkflow`, which removes each item in the collection.


## PARAMETERS

### -Instance
Object reference pointing to the workflow to be removed.
When piping workflow objects to `Remove-CsRgsWorkflow` you can leave off the Instance parameter.

To use the Instance parameter use commands similar to this:

`$x = Get-CsRgsWorkflow -Identity ApplicationServer:atl-cs-001.litwareinc.com /1987d3c2-4544-489d-bbe3-59f79f530a83`

`Remove-CsRgsWorkflow -Instance $x`

Note that you can only remove a single workflow at a time when using the Instance parameter.
That means that your object reference ($x) cannot contain multiple workflow objects.

```yaml
Type: Workflow
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Force
Forces removal of the workflow.
If this parameter is present, the workflow will be deleted without warning, even if it is currently active.
If this parameter is not present then you will be asked to confirm the deletion of any active workflow.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Rgs.Management.WritableSettings.Workflow object.
`Remove-CsRgsWorkflow` accepts pipelined instances of the Response Group workflow object.

## OUTPUTS

###  
`Remove-CsRgsWorkflow` deletes existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Workflow object.

## NOTES

## RELATED LINKS

[Get-CsRgsWorkflow](Get-CsRgsWorkflow.md)

[New-CsRgsWorkflow](New-CsRgsWorkflow.md)

[Set-CsRgsWorkflow](Set-CsRgsWorkflow.md)
