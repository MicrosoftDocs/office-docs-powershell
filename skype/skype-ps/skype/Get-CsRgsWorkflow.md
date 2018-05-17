---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsRgsWorkflow
schema: 2.0.0
---

# Get-CsRgsWorkflow

## SYNOPSIS
Returns information about Response Group workflows.
Workflows determine the actions that are taken when the Response Group application receives a phone call.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsRgsWorkflow [[-Identity] <RgsIdentity>] [-Name <String>] [-Owner <RgsIdentity>] [-ShowAll]
 [<CommonParameters>]
```

## DESCRIPTION
Workflows are perhaps the key element in the Response Group application.
Each workflow is uniquely associated with a phone number; when someone calls that number, the workflow determines how the call will be handled.
For example, the call might be routed to a series of interactive voice response (IVR) questions that prompt the caller to enter additional information ("Press 1 for hardware support.
Press 2 for software support.").
Alternatively, the call might be placed in a queue and the caller placed on hold until an agent is available to answer the call.
The availability of agents to answer calls is also dictated by the workflow: workflows are used to configure both business hours (the days of the week and the times of day when agents are available to answer calls) and holidays (days when no agents are available to answer calls).

The Get-CsRgsWorkflow cmdlet provides a way for you to return information about the workflows configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsRgsWorkflow
```

Example 1 returns information about all the workflows configured for use in your organization.
This is done by calling Get-CsRgsWorkflow without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsRgsWorkflow -Identity service:ApplicationServer:atl-cs-001.litwareinc.com
```

Example 2 returns information about all the Response Group application workflows found on the service ApplicationServer:atl-cs-001.litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsRgsWorkflow -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Select-Object -ExpandProperty DefaultAction
```

The command shown in Example 3 displays detailed information about the DefaultAction property for each Response Group workflow found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To carry out this task, Get-CsRgsWorkflow is first used to return information about all the workflows found on ApplicationServer:atl-cs-001.litwareinc.com.
This information is then piped to the Select-Object cmdlet, which "expands" the value stored in the DefaultAction property.
When you expand the value of DefaultAction, you see the individual properties of the embedded object stored in the DefaultAction property.

### -------------------------- Example 4 --------------------------
```
Get-CsRgsWorkflow -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "European Sales Support"
```

Example 4 returns information about a single Response Group workflow: the European Sales Supports workflow found on ApplicationServer:atl-cs-001.litwareinc.com.

### -------------------------- Example 5 --------------------------
```
Get-CsRgsWorkflow -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.Language -eq "en-Us"}
```

The command shown in Example 5 returns information about all the Response Group workflows that use U.S.
English as the primary language.
To do this, the command first calls Get-CsRgsWorkflow to return a collection of all the workflows found on the service ApplicationServer:atl-cs-001.litwareinc.com.
That collection is then piped to the Where-Object cmdlet, which selects only those workflows where the Language property is equal to U.S.
English (en-US).

### -------------------------- Example 6 --------------------------
```
Get-CsRgsWorkflow service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.CustomMusicOnHoldFile -eq $Null}
```

Example 6 returns all the workflows on ApplicationServer:atl-cs-001.litwareinc.com where the CustomMusicOnHoldFile property has been set to a null value.
(In other words, the command returns information about the workflows that have not been assigned custom music.) To carry out this task, the command first uses Get-CsRgsWorkflow to return a collection of all the workflows found on the service ApplicationServer:atl-cs-001.litwareinc.com.
The returned data is then piped to Where-Object, which picks out only those items where the CustomMusicOnHoldFile property is equal to a null value.


## PARAMETERS

### -Identity
Represents either the Identity of the service where the Response Group workflow is hosted or the full Identity of the workflow itself.
If you specify the service Identity (for example, service: ApplicationServer:atl-cs-001.litwareinc.com), then all the Response Group workflows hosted on that service will be returned.
If you specify the Identity of the workflow, then only that one Response Group workflow will be returned.
Note that the Identity of a workflow consists of the service Identity followed by a globally unique identifier (GUID); for example: service:ApplicationServer:atl-cs-001.litwareinc.com /1987d3c2-4544-489d-bbe3-59f79f530a83.

An alternate way to return a single Response Group workflow is to specify the service Identity, then include the Name parameter and the workflow name.
That enables you to retrieve a specific workflow without having to know the GUID assigned to that workflow.

If called without any parameters, Get-CsRgsWorkflow returns a collection of all the workflows configured for use in your organization.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Unique name given to the Response Group workflow at the time the workflow was created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Fully qualified domain name of the pool that "owns" the workflow.
The Owner pool ID and the Pool ID of a workflow are typically the same.
However, if a workflow needs to temporarily be moved (perhaps in a disaster recovery procedure) then the Pool ID will change.
However, the Owner ID will continue to point to the original pool.

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowAll
When present, shows all the Response Group workflows, including those workflows where the Owner pool ID and the Pool ID are different.
By default, Get-CsRgsWorkflow only returns information about workflows where the Owner and Parent Pools are identical.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Rgs.Management.WritableSettings.Workflow


## NOTES


## RELATED LINKS

[New-CsRgsWorkflow](New-CsRgsWorkflow.md)

[Remove-CsRgsWorkflow](Remove-CsRgsWorkflow.md)

[Set-CsRgsWorkflow](Set-CsRgsWorkflow.md)

