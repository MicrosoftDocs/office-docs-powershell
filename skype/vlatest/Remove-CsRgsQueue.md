---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsRgsQueue

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Deletes an existing Response Group queue.
With the Response Group application, phone calls are put in a queue and callers are placed on hold until a Response Group agent is available to answer that call.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Deletes an existing Response Group queue.
With the Response Group application, phone calls are put in a queue and callers are placed on hold until a Response Group agent is available to answer that call.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsRgsQueue [-Force] [-WhatIf] [-Confirm] -Instance <Queue> [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When someone calls a phone number associated with the Response Group application one of two things typically happens: either the call is transferred to a question that the caller must answer in order to continue (for example, "Press 1 for hardware support; press 2 for software support") or the call is placed in a queue until a Response Group agent is available to answer the call.

Instead of having a single queue for all phone calls, the Response Group application enables you to create multiple queues that can be associated with different workflows and different Response Group agent groups.
In turn, this means queues can respond differently to events such as a designated number of calls being simultaneously held in the queue, or to callers that have been on hold for specified amount of time.

In addition to creating new queues you can also remove existing queues; that's what the Remove-CsRgsQueue cmdlet is for.
Note that, by default, you will be prompted if you try to remove a queue that is currently assigned to an active workflow; the prompt will ask you to verify that you want to delete the queue, and Windows PowerShell will pause (and no queue will be deleted) until you answer the prompt.
To bypass the prompt, and to delete queues that are being used by an active workflow, add the Force parameter.
For example:

Get-CsRgsQueue -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsQueue -Force

Remove-CsRgsQueue always checks to see if a queue is being used by an active workflow before it will delete that queue.
However, the cmdlet does not verify whether or not the queue is being used by another queue as either the timeout or overflow queue. 
That means it is possible to delete a queue that is needed by another queue.
Because of that, you might want to use the Get-CsRgsQueue cmdlet to check the OverflowAction and TimeoutAction properties of your other Response Group queues before running Remove-CsRgsQueue to delete a queue.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRgsQueue cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsRgsQueue"}

Below Content Applies To: Lync Server 2013

When someone calls a phone number associated with the Response Group application one of two things typically happens: either the call is transferred to a question that the caller must answer in order to continue (for example, "Press 1 for hardware support; press 2 for software support") or the call is placed in a queue until a Response Group agent is available to answer the call.

Instead of having a single queue for all phone calls, the Response Group application enables you to create multiple queues that can be associated with different workflows and different Response Group agent groups.
In turn, this means queues can respond differently to events such as a designated number of calls being simultaneously held in the queue, or to callers that have been on hold for specified amount of time.

In addition to creating new queues you can also remove existing queues; that's what the Remove-CsRgsQueue cmdlet is for.
Note that, by default, you will be prompted if you try to remove a queue that is currently assigned to an active workflow; the prompt will ask you to verify that you want to delete the queue, and Windows PowerShell will pause (and no queue will be deleted) until you answer the prompt.
To bypass the prompt, and to delete queues that are being used by an active workflow, add the Force parameter.
For example:

Get-CsRgsQueue -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsQueue -Force

Remove-CsRgsQueue always checks to see if a queue is being used by an active workflow before it will delete that queue.
However, the cmdlet does not verify whether or not the queue is being used by another queue as either the timeout or overflow queue.
That means it is possible to delete a queue that is needed by another queue.
Because of that, you might want to use the Get-CsRgsQueue cmdlet to check the OverflowAction and TimeoutAction properties of your other Response Group queues before running Remove-CsRgsQueue to delete a queue.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsRgsQueue cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsRgsQueue"}

Below Content Applies To: Skype for Business Server 2015

When someone calls a phone number associated with the Response Group application one of two things typically happens: either the call is transferred to a question that the caller must answer in order to continue (for example, "Press 1 for hardware support; press 2 for software support") or the call is placed in a queue until a Response Group agent is available to answer the call.

Instead of having a single queue for all phone calls, the Response Group application enables you to create multiple queues that can be associated with different workflows and different Response Group agent groups.
In turn, this means queues can respond differently to events such as a designated number of calls being simultaneously held in the queue, or to callers that have been on hold for specified amount of time.

In addition to creating new queues you can also remove existing queues; that's what the Remove-CsRgsQueue cmdlet is for.
Note that, by default, you will be prompted if you try to remove a queue that is currently assigned to an active workflow; the prompt will ask you to verify that you want to delete the queue, and Windows PowerShell will pause (and no queue will be deleted) until you answer the prompt.
To bypass the prompt, and to delete queues that are being used by an active workflow, add the Force parameter.
For example:

Get-CsRgsQueue -Identity "service:ApplicationServer:atl-cs-001.litwareinc.com" | Remove-CsRgsQueue -Force

Remove-CsRgsQueue always checks to see if a queue is being used by an active workflow before it will delete that queue.
However, the cmdlet does not verify whether or not the queue is being used by another queue as either the timeout or overflow queue.
That means it is possible to delete a queue that is needed by another queue.
Because of that, you might want to use the Get-CsRgsQueue cmdlet to check the OverflowAction and TimeoutAction properties of your other Response Group queues before running Remove-CsRgsQueue to delete a queue.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Remove-CsRgsQueue
```

The command shown in Example 1 deletes all the Response Group queues found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first uses Get-CsRgsQueue to return a collection of all the queues found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to Remove-CsRgsQueue, which deletes each queue in the collection.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 deletes all the Response Group queues found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first uses Get-CsRgsQueue to return a collection of all the queues found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to Remove-CsRgsQueue, which deletes each queue in the collection.

Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Remove-CsRgsQueue

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 deletes all the Response Group queues found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the command first uses Get-CsRgsQueue to return a collection of all the queues found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to Remove-CsRgsQueue, which deletes each queue in the collection.

Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Remove-CsRgsQueue

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Queue" | Remove-CsRgsQueue
```

In Example 2, a single Response Group queue is deleted: the queue named "Help Desk Queue", located on the service ApplicationServer:atl-cs-001.litwareinc.com.
To delete this queue, Get-CsRgsQueue is called along with the Identity and Name parameters; the single queue returned by this call is then piped to, and deleted by, Remove-CsRgsQueue.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, a single Response Group queue is deleted: the queue named "Help Desk Queue", located on the service ApplicationServer:atl-cs-001.litwareinc.com.
To delete this queue, Get-CsRgsQueue is called along with the Identity and Name parameters; the single queue returned by this call is then piped to, and deleted by, Remove-CsRgsQueue.

Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Queue" | Remove-CsRgsQueue

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, a single Response Group queue is deleted: the queue named "Help Desk Queue", located on the service ApplicationServer:atl-cs-001.litwareinc.com.
To delete this queue, Get-CsRgsQueue is called along with the Identity and Name parameters; the single queue returned by this call is then piped to, and deleted by, Remove-CsRgsQueue.

Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Queue" | Remove-CsRgsQueue

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.OverflowCandidate -eq "NewestCall"} | Remove-CsRgsQueue
```

The preceding command deletes all the Response Group queues found on the service ApplicationServer:atl-cs-001.litwareinc.com, provided those queues have their OverflowCandidate property set to NewestCall.
To do this, Get-CsRgsQueue is first called in order to return a collection of all the Response Group queues found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those queues where the OverflowCandidate property is equal to "NewestCall".
The filtered collection is then piped to Remove-CsRgsQueue, which deletes each queue in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the Response Group queues found on the service ApplicationServer:atl-cs-001.litwareinc.com, provided those queues have their OverflowCandidate property set to NewestCall.
To do this, Get-CsRgsQueue is first called in order to return a collection of all the Response Group queues found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those queues where the OverflowCandidate property is equal to "NewestCall".
The filtered collection is then piped to Remove-CsRgsQueue, which deletes each queue in the collection.

Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.OverflowCandidate -eq "NewestCall"} | Remove-CsRgsQueue

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the Response Group queues found on the service ApplicationServer:atl-cs-001.litwareinc.com, provided those queues have their OverflowCandidate property set to NewestCall.
To do this, Get-CsRgsQueue is first called in order to return a collection of all the Response Group queues found on ApplicationServer:atl-cs-001.litwareinc.com.
This collection is then piped to the Where-Object cmdlet, which selects only those queues where the OverflowCandidate property is equal to "NewestCall".
The filtered collection is then piped to Remove-CsRgsQueue, which deletes each queue in the collection.

Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com | Where-Object {$_.OverflowCandidate -eq "NewestCall"} | Remove-CsRgsQueue

## PARAMETERS

### -Force
Forces the deletion of a Response Group queue.
If this parameter is present, the queue will be deleted without warning, even if the queue is assigned to an active workflow.
If this parameter is not present then you will be asked to confirm the deletion of any queue currently in use by an active workflow.

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

### -Instance
Below Content Applies To: Lync Server 2010

{{Fill Instance Description}}



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Object reference pointing to the queue to be removed.
When piping workflow objects to Remove-CsRgsQueue you can leave off the Instance parameter.

To use the Instance parameter use commands similar to this:

$x = Get-CsRgsQueue -Identity ApplicationServer:atl-cs-001.litwareinc.com /1987d3c2-4544-489d-bbe3-59f79f530a83

Remove-CsRgsQueue -Instance $x

Note that you can only remove a single queue at a time when using the Instance parameter.
That means that your object reference ($x) cannot contain multiple queue objects.



```yaml
Type: Queue
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Rgs.Management.WritableSettings.Queue object.
Remove-CsRgsQueue accepts pipelined instances of the Response Group queue object.

## OUTPUTS

###  
Remove-CsRgsQueue deletes existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Queue object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/7613e72c-f330-4560-88d4-a7386cd18975(OCS.14).aspx)

[Get-CsRgsQueue]()

[New-CsRgsQueue]()

[Set-CsRgsQueue]()

[Online Version](http://technet.microsoft.com/EN-US/library/7613e72c-f330-4560-88d4-a7386cd18975(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7613e72c-f330-4560-88d4-a7386cd18975(OCS.16).aspx)

