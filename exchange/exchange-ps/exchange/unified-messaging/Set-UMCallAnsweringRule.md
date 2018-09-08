---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-UMCallAnsweringRule
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-UMCallAnsweringRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-UMCallAnsweringRule cmdlet to change properties of an existing UM call answering rule.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-UMCallAnsweringRule [-Identity] <UMCallAnsweringRuleIdParameter> [-CallerIds <MultiValuedProperty>]
 [-CallersCanInterruptGreeting <$true | $false>] [-CheckAutomaticReplies <$true | $false>] [-Confirm]
 [-DomainController <Fqdn>] [-ExtensionsDialed <MultiValuedProperty>] [-KeyMappings <MultiValuedProperty>]
 [-Mailbox <MailboxIdParameter>] [-Name <String>] [-Priority <Int32>] [-ScheduleStatus <Int32>]
 [-TimeOfDay <TimeOfDay>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-UMCallAnsweringRule cmdlet changes the properties of an existing UM call answering rule stored in a UM enabled user's mailbox. You can use the Set-UMCallAnsweringRule cmdlet to specify the following conditions:

- Who the incoming call is from

- Time of day

- Calendar free/busy status

- Whether automatic replies are turned on for email

You can also specify the following actions:

- Find me

- Transfer the caller to someone else

- Leave a voice message

After this task is completed, the cmdlet sets the parameters and the values specified.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-UMCallAnsweringRule -Mailbox tonysmith -Name MyCallAnsweringRule -Priority 2
```

This example sets the priority to 2 on the existing call answering rule MyCallAnsweringRule that exists in the mailbox for tonysmith.

### -------------------------- Example 2 --------------------------
```
Set-UMCallAnsweringRule -Name MyCallAnsweringRule -CallerIds "1,4255550100,,","1,4255550123,," -Priority 2 -CallersCanInterruptGreeting $true -Mailbox tonysmith
```

This example performs the following actions on the call answering rule MyCallAnsweringRule in the mailbox for tonysmith:

- Sets the call answering rule to two caller IDs.

- Sets the priority of the call answering rule to 2.

- Sets the call answering rule to allow callers to interrupt the greeting.

### -------------------------- Example 3 --------------------------
```
Set-UMCallAnsweringRule -Name MyCallAnsweringRule -Priority 2 -Mailbox tonysmith@contoso.com -ScheduleStatus 0x8
```

This example changes the free/busy status to Out of Office on the call answering rule MyCallAnsweringRule in the mailbox for tonysmith and sets the priority to 2.

### -------------------------- Example 4 --------------------------
```
Set-UMCallAnsweringRule -Name MyCallAnsweringRule -Priority 2 -Mailbox tonysmith -ScheduleStatus 0x4 -KeyMappings "1,1,Receptionist,,,,,45678,","5,2,Urgent Issues,23456,23,45671,50,,"
```

This example performs the following actions on the call answering rule MyCallAnsweringRule in the mailbox tonysmith:

- Sets the priority of the call answering rule to 2.

- Creates key mappings for the call answering rule.

If the caller reaches the voice mail for the user and the status of the user is set to Busy, the caller can:

- Press the 1 key and be transferred to a receptionist at extension 45678.

- Press the 2 key and the Find Me feature will be used for urgent issues and ring extension 23456 first and then 45671.

### -------------------------- Example 5 --------------------------
```
Set-UMCallAnsweringRule -Name MyCallAnsweringRule -Priority 2 -Mailbox tonysmith -TimeOfDay "1,0,,"
```

This example performs the following actions on the call answering rule MyCallAnsweringRule in the mailbox for tonysmith:

- Sets the priority of the call answering rule to 2.

- If the caller reaches voice mail during working hours, the caller is asked to call back later.

### -------------------------- Example 6 --------------------------
```
Set-UMCallAnsweringRule -Name MyCallAnsweringRule -Priority 2 -Mailbox tonysmith -TimeOfDay "3,4,8:00,12:00"
```

This example sets a custom period for the time of day on the call answering rule MyCallAnsweringRule in the mailbox for tonysmith and performs the following actions:

- Sets the priority of the call answering rule to 2.

- If the caller reaches voice mail and the time is between 8:00 A.M. and 12:00 P.M. on Tuesday, ask the caller to call back later.

## PARAMETERS

### -Identity
The Identity parameter specifies the identifier for a call answering rule being changed.

```yaml
Type: UMCallAnsweringRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CallerIds
The CallerIds parameter specifies an entry for the "If the Caller is" condition. Each entry for this parameter can contain a phone number, an Active Directory contact, a personal contact, or the personal Contacts folder. The parameter can contain 50 phone numbers or contact entries and no more than one entry for specifying the default Contacts folder. If the CallerIds parameter doesn't contain a condition, the condition isn't set and is ignored. The default value is $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallersCanInterruptGreeting
The CallersCanInterruptGreeting parameter specifies whether a caller can interrupt the voice mail greeting while it's being played. The default is $null.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CheckAutomaticReplies
The CheckAutomaticReplies parameter specifies an entry for the "If My Automatic Replies are Enabled" condition. The default is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionsDialed
The ExtensionsDialed parameter specifies an entry for the "If the Caller Dials" condition. Each entry must be unique per call answering rule. Each extension must correspond to existing extension numbers assigned to UM-enabled users. The default is $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyMappings
The KeyMappings parameter specifies a key mapping entry for a call answering rule. The key mappings are those menu options offered to callers if the call answering rule is set to $true. You can configure a maximum of 10 entries. None of the defined key mappings can overlap. The default is $null.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the UM-enabled mailbox where the call answering rule will be changed. The default is the user's mailbox that's running the cmdlet.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the UM call answering rule or Call Answering Rule ID being modified. The call answering ID or name must be unique per the user's UM-enabled mailbox. The name or ID for the call answering rule can contain up to 255 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specified the order that the call answering rule will be evaluated against other existing call answering rules. Call answering rules are processed in order of increasing priority values. The priority must be unique between all call answering rules in the UM-enabled mailbox. The priority on the call answering rule must be between 1 (highest) and 9 (lowest). The default is 9.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ScheduleStatus
The ScheduleStatus parameter specifies an entry for the "If my Schedule show that I am" condition. Users can specify their free/busy status to be checked. This parameter can be set from 0 through 15 and is interpreted as a 4-bit mask that represents the calendar status including Free, Tentative, Busy and Out of Office. The following settings can be used to set the schedule status:

- None = 0x0

- Free = 0x1

- Tentative = 0x2

- Busy = 0x4

- OutOfOffice = 0x8

The default setting is $null.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimeOfDay
The TimeOfDay parameter specifies an entry for the "If the Call Arrives During" condition for the call answering rule. You can specify working hours, non-working hours or custom hours. The default is $null.

```yaml
Type: TimeOfDay
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/82f55e63-5770-433b-9a14-38f350aa5405.aspx)
