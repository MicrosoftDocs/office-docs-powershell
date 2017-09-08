---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Start-SPAdminJob

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Start-SPAdminJob [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
Use the Start-SPAdminJob cmdlet to execute all administrative timer jobs immediately rather than waiting for the timer job to run.

When the service account for the SharePoint 2010 Administration service (SPAdminV4)) is disabled (necessary in some installations for security reasons), the Start-SPAdminJob cmdlet must be run on all computers to perform administrative task like provisioning.

When you run this cmdlet in person (not in script), use the Verbose parameter to see the individual administrative operations that are run.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>Start-SPAdminJob -Verbose
```

This example runs all waiting administrative jobs and shows verbose output to the administrator.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Start-SPAdminJob -Verbose
```

This example runs all waiting administrative jobs and shows verbose output to the administrator.

## PARAMETERS

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

