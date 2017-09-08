---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPTranslationServiceApplication

## SYNOPSIS
Sets property settings on a Machine Translation service application.

## SYNTAX

```
Set-SPTranslationServiceApplication [-Identity] <TranslationServiceApplicationPipeBind>
 [-AddEnabledFileExtensions <String[]>] [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-ClearEnabledFileExtensions] [-Confirm]
 [-DatabaseCredential <PSCredential>] [-DatabaseName <String>] [-DatabaseServer <String>]
 [-DisableBinaryFileScan <Boolean>] [-EnableAllFileExtensions] [-FailoverDatabaseServer <String>]
 [-JobExpirationDays <Int32>] [-KeepAliveTimeout <Int32>] [-MachineTranslationAddress <String>]
 [-MachineTranslationCategory <String>] [-MachineTranslationClientId <String>] [-MaximumBinaryFileSize <Int32>]
 [-MaximumItemsPerDay <Int32>] [-MaximumItemsPerPartitionPerDay <Int32>]
 [-MaximumSyncTranslationRequests <Int32>] [-MaximumTextFileSize <Int32>] [-MaximumTranslationAttempts <Int32>]
 [-MaximumTranslationTime <Int32>] [-MaximumWordCharacterCount <Int32>] [-RecycleProcessThreshold <Int32>]
 [-RemoveEnabledFileExtensions <String[]>] [-TimerJobFrequency <Int32>] [-TotalActiveProcesses <Int32>]
 [-TranslationsPerInstance <Int32>] [-UseDefaultInternetSettings] [-WebProxyAddress <String>] [-WhatIf]
```

## DESCRIPTION
Use the Set-SPTranslationServiceApplication cmdlet to set properties on a Machine Translation service application in the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ---------------EXAMPLE--------------- (SharePoint Server 2013)
```
C:\PS>Set-SPTranslationServiceApplication TranslationService -JobExpirationDays 14 -TotalActiveProcesses 3
```

This example sets the job expiration to 14 days and the number of worker processes per server to 3 for the Machine Translation Service application named TranslationService.

### ---------------EXAMPLE--------------- (SharePoint Server 2016)
```
C:\PS>Set-SPTranslationServiceApplication TranslationService -JobExpirationDays 14 -TotalActiveProcesses 3
```

This example sets the job expiration to 14 days and the number of worker processes per server to 3 for the Machine Translation Service application named TranslationService.

## PARAMETERS

### -Identity
Specifies the URL or GUID of the instance of the Machine Translation service to set.

The type must be a valid URL in the form, http://server_name or a valid GUID (for example, 12345678-90ab-cdef-1234-567890bcdefgh).

```yaml
Type: TranslationServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -AddEnabledFileExtensions
Comma delimited list of file extensions that you want to add to the set of enabled file extensions for the Machine Translation Service application

To return a list of supported file extensions, type \[Microsoft.Office.TranslationServices.TranslationService\]::EnumerateFileExtensions().

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the managed application pool that the instance of Translation Service will run in.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ClearEnabledFileExtensions
Disables all file extensions for the Machine Translation Service application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredential
Specifies the SQL Server credentials used for this Translation Service instance.
This parameter to be used only used for SQL authentication; if not present, Windows authentication is used instead.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
Specifies the database name which is to be used for this Translation Service instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the database server which is to be used for this Translation Service instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisableBinaryFileScan
Determines whether Gatekeeper is run on binary files.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAllFileExtensions
Enables all file extensions for the Machine Translation Service application.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailoverDatabaseServer
Specifies the SQL server instance that will be used as a backup to the primary SQL Server instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JobExpirationDays
Specifies the amount of days after which completed jobs can be automatically removed from the Machine Translation Service queue database.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepAliveTimeout
Specifies the length of time (in seconds) that the worker can be inactive before it is automatically stopped.

The valid values are 60 to 600.
The default value is 60.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MachineTranslationAddress
Specifies the service URL the service application will use to call the translation provider.
For example, https://api.microsofttranslator.com/v2/soap.svc

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MachineTranslationCategory
Specifies the category which will be used by the service when calling the translation provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MachineTranslationClientId
Specifies the AppId which will be used by the service when calling the translation provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumBinaryFileSize
Specifies the maximum file size in kilobytes (KB) which can be translated for file types which contain binary data.
The valid values are 100 to 524288.
The default value is 51200.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumItemsPerDay
Specifies the maximum number of items which can be added to the job queue in a 24-hour period.
A value of zero indicates no limit.

The valid values are 1000 to 1000000.
A value of zero indicates no limit.
The default value is zero.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumItemsPerPartitionPerDay
Specifies the maximum number of items which can be added to the job queue in a 24-hour period per partition.
A value of zero indicates no limit.

The valid values are 1000 to 1000000.
A value of zero indicates no limit.
The default value is zero.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumSyncTranslationRequests
Specifies the maximum number of items which can be added to the sync queue.
A valid of zero indicates no limit.

The valid values are 0 to 300.
The default value is 10.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumTextFileSize
Specifies the maximum file size in kilobytes (KB) which can be translated for file types which contain mostly text data.
The valid values are 100 to 15360.
The default value is 5120.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumTranslationAttempts
Specifies the maximum number of attempts an unsuccessful job is tried before it is marked as Failed.

The valid values are 1 to 10.
The default value is 2.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumTranslationTime
Specifies the maximum length of time (in minutes) that a translation can take.

The valid values are 60 to 3600.
The default value is 600.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumWordCharacterCount
Specifies the maximum character count for a Microsoft Word document which can be translated.

The valid Int values are 10000 to 10000000.
The default value is 500000.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecycleProcessThreshold
Specifies the number of documents which are translated before a Translation Worker process is recycled.

The valid values are 1 to 1,000.
The default value is 100.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveEnabledFileExtensions
Comma delimited list of file extensions that you want to remove from the set of enabled file extensions for the Machine Translation Service application.

To return a list of supported file extensions, type \[Microsoft.Office.TranslationServices.TranslationService\]::EnumerateFileExtensions().

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TimerJobFrequency
Specifies the frequency (in minutes) with which the timer job for this service application runs.
The valid values are 1 to 59.
The default value is 15 minutes.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TotalActiveProcesses
Specifies the number of Translation Workers which are simultaneously running on a single machine.

The valid values are 1 to 5.
The default value is 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TranslationsPerInstance
Specifies the number of translations dispatched to each service instance every time the timer job is run.

Valid values are 1 to 1,000.
The default value is 200.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultInternetSettings
Determines whether the service application will use default Internet settings for the user service account to connect to the translation provider.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebProxyAddress
Specifies the web proxy address and port that the service application will use to connect to the translation provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-SPTranslationServiceApplication]()

[New-SPTranslationServiceApplicationProxy]()

[Set-SPTranslationServiceApplicationProxy]()

