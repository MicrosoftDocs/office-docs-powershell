---
external help file: 
applicable: SharePoint Online
title: Get-SPOMigrationJobProgress
schema: 2.0.0
---

# Get-SPOMigrationJobProgress

## SYNOPSIS
This cmdlet lets you report on SPO migration jobs that are in progress. 


## SYNTAX

### AzureLocationsInline
```
Get-SPOMigrationJobProgress -AzureQueueUri <String> -Credentials <CredentialCmdletPipeBind>
 [-DontWaitForEndJob] [-EncryptionParameters <EncryptionParameters>] [-JobIds <Guid[]>] [-NoLogFile]
 [-TargetWebUrl <String>] [<CommonParameters>]
```

### AzureLocationsImplicit
```
Get-SPOMigrationJobProgress -Credentials <CredentialCmdletPipeBind> [-DontWaitForEndJob]
 [-EncryptionParameters <EncryptionParameters>] [-JobIds <Guid[]>]
 -MigrationPackageAzureLocations <MigrationPackageAzureLocations> [-NoLogFile] [-TargetWebUrl <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lets you report on SPO migration jobs that are in progress. 


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
$myQueueUri = <uri to azure report queue>

Get-SPOMigrationJobProgress -AzureQueueUri $myQueueUri
```
This will report on ALL jobs within the report queue.


### -----------------------EXAMPLE 2-----------------------------
```
$jobIds = @(<jobid1>,<jobId2>....)

Get-SPOMigrationJobProgress  -AzureQueueUri $myQueueUri -JobIds $jobIds
```
This will report only jobs defined within the $jobIds collection from the report queue.


### -----------------------EXAMPLE 3-----------------------------
```
$targetWebUrl = <myTargetWebUrl>
$creds = <my site credentials>

Get-SPOMigrationJobProgress - AzureQueueUri $myQueueUri - TargetWebUrl $targetWebUrl  -Credentials $creds
```
This will report on any currently queued or in progress jobs and wait for all jobs to complete 


### -----------------------EXAMPLE 4-----------------------------
```
$targetWebUrl = <myTargetWebUrl>
$creds = <my site credentials>

Get-SPOMigrationJobProgress - AzureQueueUri $myQueueUri - TargetWebUrl  $targetWebUrl -Credentials $creds  -DontWaitForJobEnd
```
This will report on any currently queued or in progress jobs and not wait for all jobs to complete


## PARAMETERS

### -AzureQueueUri
An optional fully qualified URL and SAS token representing the Azure Storage Reporting Queue where import operations will list events during import.


```yaml
Type: String
Parameter Sets: AzureLocationsInline
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credentials
Optional credentials of a site collection administrator to use to connect to the site collection. The credentials should supply the username in UPN format (e.g. user@company.onmicrosoft.com). If this property is not set, the current tenant admin credentials from the session’s previous call to `Connect-SPOService` will be used to connect to the site collection. 


```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DontWaitForEndJob
Tells the cmdlet to not wait for the job to end. It will only process as many messages as are currently in the queue and then terminate. If this flag is set to $false, it will wait for the job to end before terminating.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EncryptionParameters
PARAMVALUE: EncryptionParameters


```yaml
Type: EncryptionParameters
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JobIds
Id of a previously created migration job that exists on the target site collection.


```yaml
Type: Guid[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrationPackageAzureLocations
A set of fully qualified URLs and SAS tokens representing the Azure Blob Storage containers that hold the package content and metadata files and an optional Azure Storage Reporting Queue. This object is returned during successful processing of the `Set-SPOMigrationPackageAzureSource`


```yaml
Type: MigrationPackageAzureLocations
Parameter Sets: AzureLocationsImplicit
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoLogFile
Indicates to not create a log file. The default is to create a new CopyMigrationPackage log file within the directory specified within the SourcePackagePath parameter. 


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetWebUrl
The fully qualified target web URL where the package will be imported into. This must include the same TargetWebURL that was used during `ConvertTo-SPOMigrationTargetedPackage`. 


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

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

### System.Object

## NOTES

## RELATED LINKS
