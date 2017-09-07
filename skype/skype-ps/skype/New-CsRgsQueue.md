---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsRgsQueue

## SYNOPSIS

Creates a new Response Group queue.
With the Response Group application, phone calls are put in a queue and callers are placed on hold until a Response Group agent is available to answer that call.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRgsQueue [-Parent] <RgsIdentity> -Name <String> [-Description <String>] [-OverflowAction <CallAction>]
 [-OverflowCandidate <OverflowCandidate>] [-OverflowThreshold <Int16>] [-TimeoutAction <CallAction>]
 [-TimeoutThreshold <Int32>] [-Force] [-InMemory]
 [-AgentGroupIDList <System.Collections.ObjectModel.Collection`1[Microsoft.Rtc.Rgs.Management.RgsIdentity]>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

When someone calls a phone number associated with the Response Group application, one of two things typically happens: either the call is transferred to a question that the caller must answer in order to continue (for example, "Press 1 for hardware support; press 2 for software support") or the call is placed in a queue until an agent is available to answer the call.

Instead of having a single queue for all phone calls, the Response Group application enables you to create multiple queues that can be associated with different workflows and different Response Group agent groups.
In turn, this means queues can respond differently to events such as a designated number of calls being simultaneously held in the queue, or to callers that have been on hold for a specified amount of time.

The New-CsRgsQueue cmdlet provides an easy way for administrators to create new Response Group queues.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

$x = New-CsRgsCallAction -Action TransferToVoicemailUri -Uri "sip:+14255551298@litwareinc.com"

New-CsRgsQueue -Parent service:ApplicationServer:atl-cs-001.litwareinc.com -Name "Help Desk" -OverflowCandidate "OldestCall" -OverflowAction $x -OverflowThreshold 25
```

Example 1 creates a new Response Group queue for the service ApplicationServer:atl-cs-001.litwareinc.com.
The first command in the example uses the New-CsRgsCallAction cmdlet to create a call action for the queue; in this example, any time the overflow threshold is exceeded calls will automatically be transferred to voice mail.
This is configured by setting the Action parameter to TransferToVoicemailUri and the URI property to the voice mail SIP URI "sip:+14255551298@litwareinc.com".

After the call action has been configured (and stored in the variable $x), New-CsRgsQueue is then used to create a new queue named Help Desk.
In addition to specifying the OverflowAction, this command also configures values for the OverflowCandidate and OverflowThreshold properties.


## PARAMETERS

### -Parent
Service where the new queue will be hosted.
For example: `-Parent "service:ApplicationServer:atl-cs-001.litwareinc.com".`

```yaml
Type: RgsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Unique name to be assigned to the queue.
The combination of the Parent property and the Name property enables you to uniquely identify Response Group queues without having to refer to the queue's globally unique identifier (GUID).

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional information about the Response Group queue.

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

### -OverflowAction
Action to be taken if the overflow threshold is reached.
The OverflowAction must be created using the New-CsRgsCallAction cmdlet.

```yaml
Type: CallAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowCandidate
Indicates which call will be acted upon should the overflow threshold be reached.
The OverflowCandidate property must be set to one of the following two values:

NewestCall

OldestCall

The default value is NewestCall.

```yaml
Type: OverflowCandidate
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverflowThreshold
Number of simultaneous calls that can be in the queue at any one time before the overflow action is triggered.
The OverflowThreshold can be any integer value between 0 and 1000, inclusive.
The default value is Null, meaning that an unlimited number of calls can be in the queue at any given time.

```yaml
Type: Int16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutAction
Action to be taken if the timeout threshold is reached.
The TimeoutAction must be created using the New-CsRgsCallAction cmdlet.

```yaml
Type: CallAction
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeoutThreshold
Amount of time (in seconds) that a call can be in the queue before that call times out.
At that point, the system will take the action specified by the TimeoutAction parameter.

The timeout threshold can be any integer value between 10 and 65535 seconds (approximately 18 hours), inclusive; the default value is null, meaning that the queue never times out.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -AgentGroupIDList
Identity of the Response Group agent groups to be added to the queue.
The agent group Identities can be retrieved using the Get-CsRgsAgentGroup cmdlet.
For details, see the Examples section in this topic.

If a call is routed to a queue that has no agent groups assigned to it (or has only been assigned agent groups that do not have any agents) then that call will automatically be disconnected.

```yaml
Type: System.Collections.ObjectModel.Collection`1[Microsoft.Rtc.Rgs.Management.RgsIdentity]
Parameter Sets: (All)
Aliases: 
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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
New-CsRgsQueue does not accept pipelined input.

## OUTPUTS

###  
New-CsRgsQueue creates new instances of the Microsoft.Rtc.Rgs.Management.WritableSettings.Queue object.

## NOTES

## RELATED LINKS

[Get-CsRgsQueue]()

[Remove-CsRgsQueue]()

[Set-CsRgsQueue]()

