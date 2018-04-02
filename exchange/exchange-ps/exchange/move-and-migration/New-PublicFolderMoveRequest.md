---
applicable: Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-PublicFolderMoveRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-PublicFolderMoveRequest cmdlet to begin the process of moving public folder contents between public folder mailboxes. Moving public folders only moves the physical contents of the public folder; it doesn't change the logical hierarchy. When the move request is completed, you must run the Remove-PublicFolderMoveRequest cmdlet to remove the request or wait until the time specified in the CompletedRequestAgeLimit parameter has passed. The request must be removed before you can run another move request.

Be aware that the target public folder mailbox will be locked while the move request is active. See the Detailed Description section below for more details.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-PublicFolderMoveRequest -Folders <PublicFolderIdParameter[]> -TargetMailbox <MailboxIdParameter>
 [-AcceptLargeDataLoss] [-AllowLargeItems] [-BadItemLimit <Unlimited>] [-CompletedRequestAgeLimit <Unlimited>]
 [-Confirm] [-DomainController <Fqdn>] [-InternalFlags <InternalMrsFlag[]>] [-Name <String>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>] [-Suspend]
 [-SuspendComment <String>] [-SuspendWhenReadyToComplete] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-RequestExpiryInterval <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
The New-PublicFolderMoveRequest cmdlet moves public folders from a source public folder mailbox to a target public folder mailbox. While the move request is active, the target public folder mailbox will be locked. As a result, public folders already residing in the target public folder mailbox will be inaccessible until the move request is complete. Therefore, before you begin the move request, you should make sure no users are accessing public folder data in that target public folder mailbox.

To move the public folder mailbox to another mailbox database, use the New-MoveRequest cmdlet. To ensure that this folder is already in the target public folder mailbox, run the Update-PublicFolderMailbox cmdlet against the target public folder mailbox. You can only perform one move request at a time. You can also move public folders by using the Move-PublicFolderBranch.ps1 script.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-PublicFolderMoveRequest -Folders \DeveloperReports\CustomerEngagements -TargetMailbox DeveloperReports01
```

This example begins the move request for the public folder \\CustomerEngagements from public folder mailbox DeveloperReports to DeveloperReports01.

### Example 2
```
New-PublicFolderMoveRequest -Folders \Dev\CustomerEngagements,\Dev\RequestsforChange,\Dev\Usability -TargetMailbox DeveloperReports01
```

This example begins the move request for public folders under the \\Dev public folder branch to the target public folder mailbox DeveloperReports01.

You can also move a branch of public folders by using the Move-PublicFolderBranch.ps1 script.

### Example 3
```
$folders = Get-PublicFolder \ -Recurse -Mailbox PUB1 -ResidentFolders | ?{$_.Name -ne "IPM_SUBTREE"} | %{$_.Identity};New-PublicFolderMoveRequest -TargetMailbox PUB2 -Folders $folders
```

This example moves all public folders from public folder mailbox Pub1 to public folder mailbox Pub2.

## PARAMETERS

### -Folders
The Folders parameter specifies the public folders that you want to move. If the public folder has child public folders, child public folders won't be moved unless you explicitly state them in the command. You can move multiple public folders by separating them with a comma, for example, \\Dev\\CustomerEngagements,\\Dev\\RequestsforChange,\\Dev\\Usability.

```yaml
Type: PublicFolderIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetMailbox
The TargetMailbox parameter specifies the target public folder mailbox that you want to move the public folders to. This parameter accepts the following:

- Alias

- Canonical DN

- Display name

- Distinguished name (DN)

- Domain\\Account

- GUID

- ImmutableId

- SMTP address

- User principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AcceptLargeDataLoss
The AcceptLargeDataLoss switch specifies the request should continue even if a large number of items in the source mailbox can't be copied to the target mailbox. You need to use this switch if you set either the BadItemLimit or LargeItemLimit parameters to a value of 51 or higher. Otherwise, the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLargeItems
The AllowLargeItems parameter specifies that you can move large items only when large items are encountered. Large items are email messages with a maximum of 1,023 attachments.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BadItemLimit
The BadItemLimit parameter specifies the maximum number of bad items that are allowed before the request fails. A bad item is a corrupt item in the source mailbox that can't be copied to the target mailbox. Also included in the bad item limit are missing items. Missing items are items in the source mailbox that can't be found in the target mailbox when the request is ready to complete.

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any bad items are detected. If you are OK with leaving a few bad items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed. If too many bad items are detected, consider using the New-MailboxRepairRequest cmdlet to attempt to fix corrupted items in the source mailbox, and try the request again.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request will be kept after it has completed before being automatically removed. The default CompletedRequestAgeLimit parameter value is 30 days.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
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

### -InternalFlags
The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the public folder move request. If you don't specify a name, the default name is PublicFolderMove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies the order in which the request should be processed in the request queue. Requests are processed in order, based on server health, status, priority, and last update time. Valid priority values are:

- Lowest

- Lower

- Low

- Normal: This is the default value.

- High

- Higher

- Highest

- Emergency

```yaml
Type: Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
The Suspend switch specifies whether to suspend the request. If you use this switch, the request is queued, but the request won't reach the status of InProgress until you resume the request with the relevant resume cmdlet. You don't have to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendComment
The SuspendComment parameter specifies a description about why the request was suspended. You can only use this parameter if you specify the Suspend parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuspendWhenReadyToComplete
The SuspendWhenReadyToComplete switch specifies whether to suspend the request before it reaches the status of CompletionInProgress. After the move is suspended, it has a status of AutoSuspended. You can then manually complete the move by using the Resume-PublicFolderMoveRequest command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType
The WorkloadType parameter is reserved for internal Microsoft use.

```yaml
Type: None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestExpiryInterval
The RequestExpiryInterval parameter specifies an age limit for a completed or failed request. When you use this parameter, the completed or failed request is automatically removed after the specified interval expires. If you don't use this parameter:

- The completed request is automatically removed based on the CompletedRequestAgeLimit parameter value.

- If the request fails, you need to manually remove it by using the corresponding Remove-\*Request cmdlet.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/d046e950-ac45-4cfd-99ae-d09b8d725615.aspx)
