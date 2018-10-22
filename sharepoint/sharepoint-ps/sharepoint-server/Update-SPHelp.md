---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Update-SPHelp
schema: 2.0.0
---

# Update-SPHelp

## SYNOPSIS
Updates SharePoint cmdlet help.


## SYNTAX

```
Update-SPHelp [-AssignmentCollection <SPAssignmentCollection>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
The Update-SPHelp cmdlet checks the Windows Download Center for updates for the SharePoint Management Shell help files against the version of the help files on the local computer. If there updates available, the cmdlet will download and install these updates. By default, the cmdlet will allow checking for updates only once every 24 hours. To override this check, use the Force parameter.

The computer that the cmdlet is being run on must have an internet connection.

Note: This cmdlet currently does not update cmdlet help.


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
PS C:\>Update-SPHelp
```
Updates SharePoint cmdlet help.

### --------------------EXAMPLE 2---------------------
```
PS C:\>Update-SPHelp -Force
```

This example over-rides the throttling logic and checks for updates to the help files even if a check was made in the last 24 hours.

### --------------------EXAMPLE 3---------------------
```
PS C:\>Update-SPHelp -Verbose
```

This example checks for updates to the help files and provides detailed feedback for each step of the process.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

NOTE: When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Over-rides the throttling logic and checks for updates to the help files even if a check was made in the last 24 hours.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
