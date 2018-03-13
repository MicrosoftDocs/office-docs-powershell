---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Remove-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Remove-Mailbox cmdlet to delete mailboxes and the associated user accounts.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Remove-Mailbox [-Identity] <MailboxIdParameter> [-Arbitration] [-Confirm] [-DomainController <Fqdn>]
 [-IgnoreDefaultScope] [-IgnoreLegalHold] [-KeepWindowsLiveID] [-Permanent <$true | $false>]
 [-RemoveLastArbitrationMailboxAllowed] [-WhatIf] [-Force] [-PublicFolder]
 [-RemoveArbitrationMailboxWithOABsAllowed] [-AuditLog] [-AuxAuditLog] [-PermanentlyDelete]
 [-SupervisoryReviewPolicy] [<CommonParameters>]
```

### Set2
```
Remove-Mailbox -Database <DatabaseIdParameter> -StoreMailboxIdentity <StoreMailboxIdParameter> [-Arbitration]
 [-Confirm] [-DomainController <Fqdn>] [-IgnoreDefaultScope] [-IgnoreLegalHold]
 [-RemoveLastArbitrationMailboxAllowed] [-WhatIf] [-Force] [-PublicFolder]
 [-RemoveArbitrationMailboxWithOABsAllowed] [-AuditLog] [-AuxAuditLog] [-PermanentlyDelete]
 [-SupervisoryReviewPolicy] [<CommonParameters>]
```

## DESCRIPTION
Use the Identity parameter alone to disconnect the mailbox from the user and remove the user account. The mailbox still exists, and is retained until the deleted mailbox retention period expires. The deleted mailbox retention period is controlled by the MailboxRetention property on the mailbox database or on the mailbox itself if the UseDatabaseRetentionDefaults property is False.

Use the Identity and Permanent parameters to disconnect the mailbox from the user, remove the user account, and immediately remove the mailbox from the mailbox database. The mailbox doesn't remain in the mailbox database as a disconnected mailbox.

Use the Disable-Mailbox cmdlet to disconnect the mailbox from the user account, but keep the user account. The mailbox is retained until the deleted mailbox retention period for the database or the mailbox expires, and then the mailbox is permanently deleted (purged). Or, you can immediately the disconnected mailbox by using the Database and StoreMailboxIdentity parameters on the Remove-Mailbox cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Remove-Mailbox -Identity "John Rodman"
```

This example removes the mailbox and the user account for the user named John Rodman. The mailbox remains in the mailbox database for the deleted mailbox retention period that's configured for the database.

### Example 2
```
Remove-Mailbox -Identity "John Rodman" -Permanent $true
```

This example removes the mailbox and the user account for the user named John Rodman. The mailbox is immediately and permanently removed from the mailbox database.

### Example 3
```
$Temp = Get-Mailbox | Where {$_.DisplayName -eq 'John Rodman'}; Remove-Mailbox -Database Server01\Database01 -StoreMailboxIdentity $Temp.MailboxGuid
```

This example removes John Rodman's mailbox from the mailbox database after the mailbox has been disconnected from the user account. The example uses the Get-Mailbox cmdlet to retrieve the mailbox GUID value of the disconnected mailbox, which is required by the StoreMailboxIdentity parameter.

## PARAMETERS

### -Identity
The Identity parameter identifies the mailbox that you want to remove. You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

You can't use this parameter with the Database parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter specifies the Exchange database that contains the mailbox that you want to remove. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

When you use this parameter with the StoreMailboxIdentity parameter to identify and remove the mailbox, the mailbox is immediately and permanently deleted from the database, so you can't reconnect or restore the mailbox. You can't use either of these parameters with the Identity parameter.

If you've disconnected a mailbox from its associated user and want to remove the mailbox object from the Exchange store, use the Database and StoreMailboxIdentity parameters.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoreMailboxIdentity
This parameter is available only in on-premises Exchange.

The StoreMailboxIdentity parameter specifies the mailbox that you want to remove. When you use this parameter, you identify the mailbox by its GUID value. You can find the GUID value by using the Get-Mailbox or Get-MailboxStatistics cmdlets.

When you use this parameter with the Database parameter to identify and remove the mailbox, the mailbox is immediately and permanently deleted from the database, so you can't reconnect or restore the mailbox. You can't either of these parameters with the Identity parameter.

If you've disconnected a mailbox from its associated user and want to remove the mailbox object from the Exchange store, use the Database and StoreMailboxIdentity parameters.

```yaml
Type: StoreMailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration
This parameter is available only in on-premises Exchange.

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreLegalHold
The IgnoreLegalHold switch specifies whether to ignore the legal hold status of the user. When you disable or remove the user, the user's cloud-based mailbox that's on legal hold is also disabled or removed. You don't need to specify a value with this switch.

After you disable or remove a mailbox, you can't include it in a discovery search. When you disable a mailbox, the mailbox is disconnected from the user account. Disconnected mailboxes and removed mailboxes are permanently deleted from the mailbox database after the deleted mailbox retention period expires. However, you can also remove a mailbox and purge it immediately from the mailbox database. Check with your organization's legal or Human Resources department before you disable or remove a mailbox that's on legal hold.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepWindowsLiveID
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Permanent
This parameter is available only in on-premises Exchange.

The Permanent parameter specifies whether to permanently delete the mailbox from the mailbox database. Valid values are:

- $true: The mailbox is immediately and permanently deleted (purged). You can't reconnect or restore the mailbox.

- $false: The mailbox disabled and retained until the deleted mailbox retention period expires. You can reconnect or restore the mailbox until the deleted mailbox retention period expires. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveLastArbitrationMailboxAllowed
This parameter is available only in on-premises Exchange.

The RemoveLastArbitrationMailboxAllowed switch specifies whether to remove the specified mailbox, even if it's the last arbitration mailbox in the organization. If you remove the last arbitration mailbox in the organization, you can't have user-created distribution groups or moderated recipients. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
The PublicFolderswitch specifies that the mailbox to remove is a public folder mailbox. You don't need to specify a value with this switch. You need to use this switch to remove public folder mailboxes.

Public folder mailboxes are specially designed mailboxes to store the hierarchy and content of public folders.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveArbitrationMailboxWithOABsAllowed
This parameter is available only in on-premises Exchange.

The RemoveArbitrationMailboxWithOABsAllowed switch specifies whether to bypass the checks for offline address books (OABs) within the specified arbitration mailbox that is being removed. When you use this switch, the arbitration mailbox is removed even if OABs are present in the mailbox. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuxAuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PermanentlyDelete
This parameter is available only in the cloud-based service.

The PermanentlyDelete switch specifies whether to immediately and permanently delete (purge) the mailbox, which prevents you from recovering or restoring the mailbox. You don't need to specify a value with this switch.

Notes:

- This switch works only on mailboxes that have already been deleted, but are still recoverable (known as soft-deleted mailboxes).

- This switch doesn't work on soft-deleted mailboxes that are on In-Place Hold or Litigation Hold (known as inactive mailboxes).

Use the Get-Mailbox cmdlet to identify the soft-deleted mailbox, and then pipe the results to the Remove-Mailbox cmdlet with this switch. For example, Get-Mailbox -Identity Laura -SoftDeleted | Remove-Mailbox -PermanentlyDelete.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupervisoryReviewPolicy
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/0477708c-768c-4040-bad2-8f980606fcf4.aspx)
