---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-PublicFolderMigrationRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-PublicFolderMigrationRequest cmdlet to begin the process of migrating public folders from Exchange Server 2010.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
New-PublicFolderMigrationRequest [[-Name] <String>] -OutlookAnywhereHostName <Fqdn>
 -RemoteCredential <PSCredential> -RemoteMailboxLegacyDN <String> -RemoteMailboxServerLegacyDN <String>
 [-AcceptLargeDataLoss]
 [-AuthenticationMethod <Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured>]
 [-BadItemLimit <Unlimited>] [-BatchName <String>] [-CompletedRequestAgeLimit <Unlimited>] [-Confirm]
 [-CSVData <Byte[]>] [-CSVStream <Stream>] [-DomainController <Fqdn>] [-InternalFlags <InternalMrsFlag[]>]
 [-LargeItemLimit <Unlimited>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>]
 [-SkipMerging <SkippableMergeComponent[]>] [-Suspend] [-SuspendComment <String>] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-MigrationMailbox <MailboxIdParameter>] [-RequestExpiryInterval <Unlimited>]
 [-SourceEndpoint <MigrationEndpointIdParameter>] [<CommonParameters>]
```

### Set1
```
New-PublicFolderMigrationRequest [[-Name] <String>] -SourceDatabase <DatabaseIdParameter>
 [-AcceptLargeDataLoss] [-BadItemLimit <Unlimited>] [-BatchName <String>]
 [-CompletedRequestAgeLimit <Unlimited>] [-Confirm] [-CSVData <Byte[]>] [-CSVStream <Stream>]
 [-DomainController <Fqdn>] [-InternalFlags <InternalMrsFlag[]>] [-LargeItemLimit <Unlimited>]
 [-Priority <Lowest | Lower | Low | Normal | High | Higher | Highest | Emergency>]
 [-SkipMerging <SkippableMergeComponent[]>] [-Suspend] [-SuspendComment <String>] [-WhatIf]
 [-WorkloadType <None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport>]
 [-MigrationMailbox <MailboxIdParameter>] [-RequestExpiryInterval <Unlimited>]
 [-SourceEndpoint <MigrationEndpointIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Migrating public folders is a multi-step process. For more information before you attempt a public folder migration, see Use serial migration to migrate public folders to Exchange 2013 from previous versions.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-PublicFolderMigrationRequest -SourceDatabase PFDB01 -CSVData (Get-Content C:\PFMigration\CSVData.csv -Encoding Byte)
```

This example creates a public folder migration request from the Exchange 2010 source public folder database PFDB01 and uses the CSVData.csv file that was created using the Export-PublicFolderStatistics.ps1 script. For more information, see Use serial migration to migrate public folders to Exchange 2013 from previous versions.

## PARAMETERS

### -OutlookAnywhereHostName
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteCredential
This parameter is available only in the cloud-based service.

The RemoteCredential parameter specifies an administrator who has permission to perform the migration request, for example, Administrator@humongousinsurance.com.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

You must use this parameter in conjunction with the RemoteMailboxServerLegacyDN parameter.

```yaml
Type: PSCredential
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteMailboxLegacyDN
This parameter is available only in the cloud-based service.

The RemoteMailboxLegacyDN parameter specifies the mailbox of the remote credentials specified in the RemoteCredential parameter.

You must use this parameter in conjunction with the RemoteMailboxServerLegacyDN parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteMailboxServerLegacyDN
This parameter is available only in the cloud-based service.

The RemoteMailboxServerLegacyDN parameter specifies the server legacy distinguished name (DN) of the back-end server. To find the LegacyExchangeServerDN property, run the following command: Get-ExchangeServer \<Identity\> | Format-List LegacyExchangeServerDN.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceDatabase
This parameter is available only in on-premises Exchange.

The SourceDatabase parameter specifies the identity of the database on which the public folders that are being migrated resides. You can use the following values:

- GUID of the database

- Database name

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationMethod
This parameter is reserved for internal Microsoft use.

```yaml
Type: Basic | Digest | Ntlm | Fba | WindowsIntegrated | LiveIdFba | LiveIdBasic | WSSecurity | Certificate | NegoEx | OAuth | Adfs | Kerberos | Negotiate | LiveIdNegotiate | Misconfigured
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies a descriptive name for the public folder migration batch. You can use the BatchName parameter as a search string when you use the Get-PublicFolderMigrationRequest cmdlet.

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

### -CompletedRequestAgeLimit
The CompletedRequestAgeLimit parameter specifies how long the request is kept after it has completed before being automatically removed. The default CompletedRequestAgeLimit parameter value is 30 days.

```yaml
Type: Unlimited
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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -CSVData
The CSVData parameter specifies the mapping file output generated by the PublicFoldertoMailboxMapGenerator.ps1 script. Use this parameter for local migrations.

A valid value for this parameter requires you to read the file to a byte-encoded object using the Get-Content cmdlet. For example, ([Byte[]](Get-Content -Encoding Byte -Path "C:\\My Documents\\\<filename\>" -ReadCount 0)).

You can't use this parameter with the CSVStream parameter, but you need to use it if you don't use CSVStream parameter.

```yaml
Type: Byte[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CSVStream
The CSVStream parameter specifies the mapping file output generated by the PublicFoldertoMailboxMapGenerator.ps1 script. Use this parameter for remote migrations.

You can't use this parameter with the CSVData parameter, but you need to use it if you don't use CSVData parameter.

```yaml
Type: Stream
Parameter Sets: (All)
Aliases:
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

### -InternalFlags
The InternalFlags parameter specifies the optional steps in the request. This parameter is used primarily for debugging purposes.

```yaml
Type: InternalMrsFlag[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LargeItemLimit
The LargeItemLimit parameter specifies the maximum number of large items that are allowed before the request fails. A large item is a message in the source mailbox that exceeds the maximum message size that's allowed in the target mailbox. If the target mailbox doesn't have a specifically configured maximum message size value, the organization-wide value is used.

For more information about maximum message size values, see the following topics:

- Exchange 2016: Message size limits in Exchange 2016 (https://technet.microsoft.com/library/bb124345.aspx)

- Exchange Online: Exchange Online Limits (https://go.microsoft.com/fwlink/p/?LinkId=524926)

Valid input for this parameter is an integer or the value unlimited. The default value is 0, which means the request will fail if any large items are detected. If you are OK with leaving a few large items behind, you can set this parameter to a reasonable value (we recommend 10 or lower) so the request can proceed.

If you set this value to 51 or higher, you also need to use the AcceptLargeDataLoss switch. Otherwise, the command will fail.

```yaml
Type: Unlimited
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
The Name parameter specifies the name of the public folder migration request.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Priority
This parameter is available only in on-premises Exchange.

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMerging
The SkipMerging parameter specifies whether certain stages of a public folder migration are skipped for debugging purposes. Don't use this parameter unless directed to do so by a Microsoft Customer Service and Support or specific documentation.

```yaml
Type: SkippableMergeComponent[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WorkloadType
This parameter is available only in on-premises Exchange.

The WorkloadType parameter is reserved for internal Microsoft use.

```yaml
Type: None | Local | Onboarding | Offboarding | TenantUpgrade | LoadBalancing | Emergency | RemotePstIngestion | SyncAggregation | RemotePstExport
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationMailbox
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes and ss = seconds.

When you use the value Unlimited, the completed request isn't automatically removed.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceEndpoint
This parameter is reserved for internal Microsoft use.

```yaml
Type: MigrationEndpointIdParameter
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/4537bb70-8806-4e23-b596-6dbf9f85e84d.aspx)
