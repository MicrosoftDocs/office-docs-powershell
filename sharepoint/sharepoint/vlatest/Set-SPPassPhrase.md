---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPPassPhrase

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Set-SPPassPhrase [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-LocalServerOnly] [-WhatIf]
 -PassPhrase <SecureString>
```

### UNNAMED_PARAMETER_SET_2
```
Set-SPPassPhrase [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
 -ConfirmPassPhrase <SecureString> -PassPhrase <SecureString>
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Set-SPPassPhrase cmdlet sets the Passphrase to a new Passphrase value.
If the LocalServerOnly parameter is not used, the farm encryption key is re-encrypted with the new value and attempts to propagate this value to all other servers in the farm.
If the LocalServerOnly parameter is used, this is updated on the local machine only, and the farm encryption key is not changed.
The Passphrase value must be the same on all servers in the farm if the farm is to function correctly.
So if the Passphrase fails to propagate to all servers, the LocalServerOnly parameter can be used to set the remaining servers to the new Passphrase value manually.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>$passphrase = ConvertTo-SecureString -asPlainText -Force

C:\PS>Set-SPPassPhrase -PassPhrase $passphrase -Confirm
```

This example queries for a string to use as a passphrase, and sets the farm passphrase to a new value.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>$passphrase = ConvertTo-SecureString -asPlainText -Force

C:\PS>Set-SPPassPhrase -PassPhrase $passphrase -Confirm
```

This example queries for a string to use as a passphrase, and sets the farm passphrase to a new value.

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

### -LocalServerOnly
Scopes the Passphrase change to the local server only.
If this parameter is not used, the Passphrase change is performed farm-wide.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

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

### -ConfirmPassPhrase
@{Text=}

```yaml
Type: SecureString
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassPhrase
Specifies the new Passphrase value.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

