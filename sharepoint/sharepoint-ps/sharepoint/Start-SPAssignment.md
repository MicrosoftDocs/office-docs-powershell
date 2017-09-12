---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Start-SPAssignment

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Initiates a new assignment store.



## SYNTAX

```
Start-SPAssignment [-AssignmentCollection <SPAssignmentCollection>] [-Global] [<CommonParameters>]
```

## DESCRIPTION
The Start-SPAssignment cmdlet properly disposes of objects used with variable assignments.

Large amounts of memory are often required when SPWeb, SPSite, or SPSiteAdminsitration objects are used.
So the use of these objects, or lists of these objects, in Windows PowerShell scripts requires proper memory management.
By default, all Get commands dispose of these objects immediately after the pipeline finishes, but by using SPAssignment, you can assign the list of objects to a variable and dispose of the objects after they are no longer needed.
You can also ensure that the objects remain as long as you need them, even throughout multiple iterations of commands.

There are three levels of assignment:

-- No assignment -- The object is not assigned to a variable and is disposed of after each iteration of the command.
-- Simple assignment -- All objects are assigned to the global assignment store. This is done by using the Global parameter. When using this level, all objects are assigned to a global store and are disposed of when the Stop-SPAssignment cmdlet is called.
-- Advanced assignment -- Objects are assigned to named stores for disposal. You can dispose of objects by using the Identity parameter with the Stop-SPAssignment cmdlet.

Regardless of the assignment level used, all objects are disposed of when the Windows PowerShell run space is closed.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Start-SPAssignment -global

C:\PS>$w = Get-SPWeb http://MyWeb

C:\PS>$w | Set-SPWeb -title "Accounting"

C:\PS>Stop-SPAssignment -global
```

This example uses simple assignment.
Although it is easier to use simple assignment, it is not a good idea to run commands that iterate through multiple SPSite or SPWeb objects while simple assignment is enabled.
Ensure that you run Stop-SPAssignment before you attempt any iterations of multiple objects.

### ------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Start-SPAssignment -global

C:\PS>$w = Get-SPWeb http://MyWeb

C:\PS>$w | Set-SPWeb -title "Accounting"

C:\PS>Stop-SPAssignment -global
```

This example uses simple assignment.
Although it is easier to use simple assignment, it is not a good idea to run commands that iterate through multiple SPSite or SPWeb objects while simple assignment is enabled.
Ensure that you run Stop-SPAssignment before you attempt any iterations of multiple objects.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>$gc = Start-SPAssignment

C:\PS>$web = $gc | Get-SPWeb http://MyWeb

C:\PS>$web | Set-SPWeb -title "Accounting"

C:\PS>Stop-SPAssignment -Identity $gc
```

This example sets the title of the SPWeb object in multiple lines and controls the rate of disposal.
This is an advanced example.
Only developers are advised to use it.

### ------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>$gc = Start-SPAssignment

C:\PS>$web = $gc | Get-SPWeb http://MyWeb

C:\PS>$web | Set-SPWeb -title "Accounting"

C:\PS>Stop-SPAssignment -Identity $gc
```

This example sets the title of the SPWeb object in multiple lines and controls the rate of disposal.
This is an advanced example.
Only developers are advised to use it.

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Global
If you use this parameter, all objects are assigned to the lifetime of the script and are disposed of when the Stop-SPAssignment cmdlet is called.

If you do not use this parameter, you must assign the output of this cmdlet to a variable and then dispose of objects by using the Identity parameter of the Stop-SPAssignment cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
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

