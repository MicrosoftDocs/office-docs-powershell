---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsRgsQueue
schema: 2.0.0
---

# Set-CsRgsQueue

## SYNOPSIS
Modifies an existing Response Group queue.
With the Response Group application, phone calls are put in a queue and callers are placed on hold until a Response Group agent is available to answer that call.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsRgsQueue [-Instance] <Queue> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When someone calls a phone number associated with the Response Group application, one of two things typically happens: either the call is transferred to a question that the caller must answer in order to continue (for example, "Press 1 for hardware support; press 2 for software support") or the call is placed in a queue until an agent is available to answer the call.

Instead of having a single queue for all phone calls, the Response Group application enables you to create multiple queues that can be associated with different workflows and different Response Group agent groups.
In turn, this means queues can respond differently to events such as X number of calls being simultaneously held in the queue, or to callers that have been on hold for X number of seconds.

The `Set-CsRgsQueue` cmdlet provides a way for you to modify an existing Response Group queue.
`Set-CsRgsQueue` does not allow you to directly modify the queue; for example, the cmdlet does not include parameters for changing the overflow threshold or the overflow action.
If you need to modify a queue, you will first need to create an object reference to that queue by using `Get-CsRgsQueue` to retrieve the queue of interest and then storing that queue in a variable.
Modifications to the queue are then made in memory by assigning new values to queue properties.
After all the changes have been made, you then call `Set-CsRgsQueue` to write those changes back to the actual Response Group queue.
If you do not call `Set-CsRgsQueue`, your changes will be made in memory only, and will disappear as soon as you close Windows PowerShell or delete the object reference variable.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
$x = Get-CsRgsQueue -Identity Service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$x.OverflowCandidate = "NewestCall"

Set-CsRgsQueue -Instance $x
```

In Example 1, the OverflowCandidate property is modified for the Response Group queue Help Desk, found on the service ApplicationServer:atl-cs-001.litwareinc.com.
To do this, the first command in the example uses `Get-CsRgsQueue` to retrieve the specified queue (-Name "Help Desk") from ApplicationServer:atl-cs-001.litwareinc.com.
The retrieved queue is then stored in a variable named $x.

After the queue has been retrieved, the second command in the example sets the value of the OverflowCandidate property of this virtual queue to NewestCall.
As soon as that command completes, the final command in the example uses `Set-CsRgsQueue` to write these changes to the actual Help Desk queue.
Note that, up to this point, the changes have taken place only in memory.
Until you call `Set-CsRgsQueue` the actual Response Group queue on ApplicationServer:atl-cs-001.litwareinc.com will remain unchanged.


### -------------------------- Example 2 ------------------------
```
$x = Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk Overflow Queue"

$w = New-CsRgsPrompt -TextToSpeechPrompt "Please hold while we transfer your call."

$y = New-CsRgsCallAction -Prompt $w -Action TransferToQueue -QueueID $x.Identity

$z = Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"

$z.OverflowAction = $y

Set-CsRgsQueue -Instance $z
```

The commands shown in Example 2 demonstrate how you can create a new Response Group call action and then assign that action to an existing Response Group queue.
To perform this task, the first step is to use `Get-CsRgsQueue` to retrieve the Response Group queue Help Desk Overflow Queue from ApplicationServer:atl-cs-001.litwareinc.com.
Information about this queue is stored in a variable named $x.

After the queue has been retrieved, the `New-CsRgsPrompt` cmdlet is used to create a new text-to-speech prompt, which is stored in a variable named $w.
From there, `New-CsRgsCallAction` cmdlet is used to create a new call action.
This call action is assigned three parameters: Prompt (the prompt to be used by the call action); Action (which indicates what happens if the new call action is triggered; the parameter value TransferToQueue means that the call will be transferred to a different Response Group queue) and QueueID, the alternate queue the call will be transferred to ($x.Identity, which represents the Identity of the queue Help Desk Overflow Queue).
This new call action is created in memory and then stored in a variable named $y.

The next command retrieves the queue to be modified; in this example, that's the Help Desk queue on ApplicationServer:atl-cs-001.litwareinc.com.
After `Get-CsRgsQueue` retrieves this queue, the queue object is stored in a variable named $z.

When all that is done you can assign the new call action to the Help Desk queue; you do this by setting the value of the OverflowAction property to $y, the variable that contains the newly created call action.

After the call action has been assigned, the final command in the example calls `Set-CsRgsQueue` to write the changes to the actual instance of the Help Desk queue on ApplicationServer:atl-cs-001.litwareinc.com.


## PARAMETERS

### -Instance
Object reference to the Response Group queue to be modified.
An object reference is typically retrieved by using the `Get-CsRgsQueue` cmdlet and assigning the returned value to a variable; for example, this command returns an object reference to the Help Desk queue and stores that object reference in a variable named $x:

`$x = Get-CsRgsQueue -Identity service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk"`

```yaml
Type: Queue
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Rgs.Management.WritableSettings.Queue object.
`Set-CsRgsQueue` accepts pipelined instances of the Response Group queue object.

## OUTPUTS

###  
`Set-CsRgsQueue` does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Queue object.

## NOTES

## RELATED LINKS

[Get-CsRgsQueue]()

[New-CsRgsQueue]()

[Remove-CsRgsQueue]()
