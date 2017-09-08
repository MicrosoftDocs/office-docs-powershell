---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Update-SPHelp

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Update-SPHelp [-AssignmentCollection <SPAssignmentCollection>] [-Force]
```

## DESCRIPTION
Below Content Applies To: SharePoint Server 2013

The Update-SPHelp cmdlet checks the Windows Download Center for updates for the SharePoint 2013 Management Shell help files against the version of the help files on the local computer.
If there updates available, the cmdlet will download and install these updates.
By default, the cmdlet will allow checking for updates only once every 24 hours.
To override this check, use the -Force parameter.

The computer that the cmdlet is being run on must have an internet connection.
Below Content Applies To: SharePoint Server 2016

{{Fill in the Description}}

## EXAMPLES

### --------------------EXAMPLE 1--------------------- (SharePoint Server 2013)
```
C:\PS>Update-SPHelp
```

This example checks for updates to the help files.

### Example 1 (SharePoint Server 2016)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### --------------------EXAMPLE 2--------------------- (SharePoint Server 2013)
```
C:\PS>Update-SPHelp -Force
```

This example over-rides the throttling logic and checks for updates to the help files even if a check was made in the last 24 hours.

### --------------------EXAMPLE 3--------------------- (SharePoint Server 2013)
```
C:\PS>Update-SPHelp -Verbose
```

This example checks for updates to the help files and provides detailed feedback for each step of the process.

## PARAMETERS

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

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

### -Force
{{Fill Force Description}}

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

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

