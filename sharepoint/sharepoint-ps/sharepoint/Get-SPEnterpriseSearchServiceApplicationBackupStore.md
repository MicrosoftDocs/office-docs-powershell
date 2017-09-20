---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPEnterpriseSearchServiceApplicationBackupStore

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Retrieves information about the Search service application backup files.

**Below Content Applies To:**SharePoint Server 2016

Retrieves information about the search service application backup files.



## SYNTAX

```
Get-SPEnterpriseSearchServiceApplicationBackupStore [-BackupFolder] <String> [-Name] <String>
 [[-BackupId] <String>] [-UseMostRecent] [-IsVerbose] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

This cmdlet returns information about the search databases and index files in a specified Search service application backup location.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

This cmdlet returns information about the search databases and index files in a specified search service application backup location.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### ------------------EXAMPLE 1----------------- (SharePoint Server 2013)
```
Get-SPEnterpriseSearchServiceApplicationBackupStore -BackupFolder \\sample\backup -Name "Search Service Application" -BackupId 3222ad97-91ad-471f-a764-780ec1f05f74
```

This example retrieves the backup of the search databases and index files that are located at \\\\sample\backup with the backup id 3222ad97-91ad-471f-a764-780ec1f05f74 from the Search service application Search Service Application.

### ------------------EXAMPLE 1----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPEnterpriseSearchServiceApplicationBackupStore -BackupFolder \\sample\backup -Name "Search Service Application" -BackupId 3222ad97-91ad-471f-a764-780ec1f05f74
```

This example retrieves the backup of the search databases and index files that are located at \\\\sample\backup with the backup id 3222ad97-91ad-471f-a764-780ec1f05f74 from the search service application Search Service Application.

### ------------------EXAMPLE 2----------------- (SharePoint Server 2013)
```
Get-SPEnterpriseSearchServiceApplicationBackupStore -BackupFolder \\sample\backup -Name "Search Service Application" -UseMostRecent
```

This example retrieves the most recently taken backup of the search databases and index files that are located at \\\\sample\backup from the Search service application Search Service Application.

### ------------------EXAMPLE 2----------------- (SharePoint Server 2016)
```
C:\PS>Get-SPEnterpriseSearchServiceApplicationBackupStore -BackupFolder \\sample\backup -Name "Search Service Application" -UseMostRecent
```

This example retrieves the most recently taken backup of the search databases and index files that are located at \\\\sample\backup from the search service application Search Service Application.

## PARAMETERS

### -BackupFolder
Specifies the full file path of the backup files.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
**Below Content Applies To:**SharePoint Server 2013

Specifies the name of the Search service application from which to retrieve the related backup information.



**Below Content Applies To:**SharePoint Server 2016

Specifies the name of the search service application from which to retrieve the related backup information.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackupId
Specifies the GUID of the backup in the referred package.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 4
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -UseMostRecent
A switch to specify if the most recent backup should be used.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsVerbose
A switch to specify if messages should be printed out when the cmdlet is running.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 6
Default value: None
Accept pipeline input: False
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b306c983-ce99-4a8d-b840-5db542ba4ed0(Office.15).aspx)

