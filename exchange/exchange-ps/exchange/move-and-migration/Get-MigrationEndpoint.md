---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-MigrationEndpoint
schema: 2.0.0
---

# Get-MigrationEndpoint

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MigrationEndpoint cmdlet to retrieve migration endpoint settings for source or destination servers for cutover or staged Exchange migrations, IMAP migrations, and remote moves.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Get-MigrationEndpoint -ConnectionSettings <ExchangeConnectionSettings> [-Diagnostic]
 [-DiagnosticArgument <String>] [-DomainController <Fqdn>] [-Partition <MailboxIdParameter>]
 [<CommonParameters>]
```

### Set2
```
Get-MigrationEndpoint
 -Type <None | IMAP | XO1 | ExchangeOutlookAnywhere | BulkProvisioning | ExchangeRemoteMove | ExchangeLocalMove | PSTImport | PublicFolder>
 [-Diagnostic] [-DiagnosticArgument <String>] [-DomainController <Fqdn>] [-Partition <MailboxIdParameter>]
 [<CommonParameters>]
```

### Set1
```
Get-MigrationEndpoint [[-Identity] <MigrationEndpointIdParameter>] [-Diagnostic] [-DiagnosticArgument <String>]
 [-DomainController <Fqdn>] [-Partition <MailboxIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-MigrationEndpoint cmdlet retrieves settings for different types of migration:

- Cross-forest move: Move mailboxes between two different on-premises Exchange forests. Cross-forest moves require the use of a RemoteMove endpoint.

- Remote move: In a hybrid deployment, a remote move involves onboarding or offboarding migrations. Remote moves require the use of a RemoteMove endpoint. Onboarding moves mailboxes from an on-premises Exchange organization to Exchange Online in Office 365, and uses a RemoteMove endpoint as the source endpoint of the migration batch. Offboarding moves mailboxes from Exchange Online in Office 365 to an on-premises Exchange organization and uses a RemoteMove endpoint as the target endpoint of the migration batch.

- Cutover Exchange migration: Migrate all mailboxes in an on-premises Exchange organization to Exchange Online in Office 365. Cutover Exchange migration requires the use of an Exchange endpoint.

- Staged Exchange migration: Migrate a subset of mailboxes from an on-premises Exchange organization to Exchange Online in Office 365. Staged Exchange migration requires the use of an Exchange endpoint.

- IMAP migration: Migrate mailbox data from an on-premises Exchange organization or other email system to Exchange Online in Office 365. For an IMAP migration, you must first create the cloud-based mailboxes before you migrate mailbox data. IMAP migrations require the use of an IMAP endpoint.

- Local: Move mailboxes between different servers or databases within a single on-premises Exchange forest. Local moves don't require the use of an endpoint.

For more information about the different move and migration scenarios, see:

- Mailbox moves (https://technet.microsoft.com/library/jj150543.aspx)

- Manage on-premises mailbox moves (https://technet.microsoft.com/library/jj150487.aspx)

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MigrationEndpoint -Identity OnboardingME01
```

This example retrieves the settings for the migration endpoint, OnboardingME01.

## PARAMETERS

### -ConnectionSettings
The ConnectionSettings parameter specifies the configuration settings of source or target servers for which you want to find a matching endpoint.

```yaml
Type: ExchangeConnectionSettings
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter filters the results by the type of migration. Valid values for this parameter are:

- ExchangeOutlookAnywhere: Cutover or staged Exchange migrations

- ExchangeRemoteMove: Remote moves and migrations

- IMAP: IMAP migrations

- PublicFolder: Public folder migrations

```yaml
Type: None | IMAP | XO1 | ExchangeOutlookAnywhere | BulkProvisioning | ExchangeRemoteMove | ExchangeLocalMove | PSTImport | PublicFolder
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostic
The Diagnostic switch specifies whether to return extremely detailed information in the results. Typically, you use this switch only at the request of Microsoft Customer Service and Support to troubleshoot problems.

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

### -DiagnosticArgument
The DiagnosticArgument parameter modifies the results that are returned by using the Diagnostic switch. Typically, you use the Diagnostic switch and the DiagnosticArgument parameter only at the request of Microsoft Customer Service and Support to troubleshoot problems.

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

### -Identity
The Identity parameter specifies the name of the migration endpoint you want to retrieve settings for.

```yaml
Type: MigrationEndpointIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Partition
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

[Online Version](https://technet.microsoft.com/library/3576e65b-4b64-46a5-a95a-7045daf4893e.aspx)
