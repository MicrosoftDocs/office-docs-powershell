---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online
title: Set-CASMailboxPlan
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Set-CASMailboxPlan

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-CASMailboxPlan cmdlet to modify Client Access services (CAS) mailbox plans in the cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-CASMailboxPlan [-Identity] <MailboxPlanIdParameter> [-ActiveSyncDebugLogging <$true | $false>]
 [-ActiveSyncEnabled <$true | $false>] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-ECPEnabled <$true | $false>]
 [-EwsAllowEntourage <$true | $false>] [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <$true | $false>] [-EwsAllowOutlook <$true | $false>]
 [-EwsApplicationAccessPolicy <EnforceAllowList | EnforceBlockList>] [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <$true | $false>] [-IgnoreDefaultScope] [-ImapEnabled <$true | $false>]
 [-ImapEnableExactRFC822Size <$true | $false>] [-ImapForceICalForCalendarRetrievalOption <$true | $false>]
 [-ImapMessagesRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>]
 [-ImapProtocolLoggingEnabled <$true | $false>] [-ImapSuppressReadReceipt <$true | $false>]
 [-ImapUseProtocolDefaults <$true | $false>] [-MAPIBlockOutlookNonCachedMode <$true | $false>]
 [-MAPIBlockOutlookRpcHttp <$true | $false>] [-MAPIBlockOutlookVersions <String>]
 [-MAPIEnabled <$true | $false>] [-OWAEnabled <$true | $false>] [-OWAforDevicesEnabled <$true | $false>]
 [-OwaMailboxPolicy <MailboxPolicyIdParameter>] [-PopEnabled <$true | $false>]
 [-PopEnableExactRFC822Size <$true | $false>] [-PopForceICalForCalendarRetrievalOption <$true | $false>]
 [-PopMessagesRetrievalMimeFormat <TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef>]
 [-PopProtocolLoggingEnabled <$true | $false>] [-PopSuppressReadReceipt <$true | $false>]
 [-PopUseProtocolDefaults <$true | $false>] [-RemotePowerShellEnabled <$true | $false>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
CAS mailbox plans control client access settings for all mailboxes that have the plans assigned to them (for example, Exchange ActiveSync, POP, IMAP, and Outlook on the web settings).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CASMailboxPlan -Identity ExchangeOnlineEnterprise -ActiveSyncEnabled $false -PopEnabled $false
```

This example disables Exchange ActiveSync and POP3 access to mailboxes in the CAS mailbox plan named ExchangeOnlineEnterprise.

## PARAMETERS

### -Identity
The Identity parameter specifies the CAS mailbox plan that you want to modify. You can use any value that uniquely identifies the CAS mailbox plan. For example:

- Name

- Display Name

- Distinguished name (DN)

- GUID

Typically, the name of the CAS mailbox plan is the same as the corresponding mailbox plan (for example, ExchangeOnlineEnterprise).

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSyncDebugLogging
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncEnabled
The ActiveSyncEnabled parameter specifies whether to enable or disable Exchange ActiveSync access to mailboxes that have the CAS mailbox plan applied to them. Valid values are:

- $true: ActiveSync access to mailboxes is enabled.

- $false: ActiveSync access to mailboxes is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ECPEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowEntourage
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowList
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowMacOutlook
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowOutlook
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsApplicationAccessPolicy
This parameter is reserved for internal Microsoft use.

```yaml
Type: EnforceAllowList | EnforceBlockList
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsBlockList
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnabled
The ImapEnabled parameter specifies whether to enable or disable IMAP4 access to mailboxes that have the CAS mailbox plan applied to them. Valid values are:

- $true: IMAP4 access to mailboxes is enabled.

- $false: IMAP4 access to mailboxes is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapEnableExactRFC822Size
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapForceICalForCalendarRetrievalOption
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapMessagesRetrievalMimeFormat
This parameter is reserved for internal Microsoft use.

```yaml
Type: TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapProtocolLoggingEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapSuppressReadReceipt
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImapUseProtocolDefaults
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookNonCachedMode
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookRpcHttp
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIBlockOutlookVersions
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MAPIEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAforDevicesEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OwaMailboxPolicy
The OwaMailboxPolicy parameter specifies the Outlook on the web (formerly known as Outlook Web App) mailbox policy that you want applied to mailboxes that have the CAS mailbox plan applied to them. You can use any value that uniquely identifies the Outlook on the web mailbox policy. For example:

- Name

- Distinguished name (DN)

- GUID

You can use the Get-OwaMailboxPolicy cmdlet to view the avaliable Outlook on the web mailbox policies.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnabled
The PopEnabled parameter specifies whether to enable or disable POP3 access to mailboxes that have the mailbox plan applied to them. Valid values are:

- $true: POP3 access to mailboxes is enabled.

- $false: POP3 access to mailboxes is disabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopEnableExactRFC822Size
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopForceICalForCalendarRetrievalOption
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopMessagesRetrievalMimeFormat
This parameter is reserved for internal Microsoft use.

```yaml
Type: TextOnly | HtmlOnly | HtmlAndTextAlternative | TextEnrichedOnly | TextEnrichedAndTextAlternative | BestBodyFormat | Tnef
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopProtocolLoggingEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopSuppressReadReceipt
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PopUseProtocolDefaults
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePowerShellEnabled
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
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

[Online Version](https://technet.microsoft.com/library/1f9070cd-cae6-4e16-93d7-301abac8cab5.aspx)
