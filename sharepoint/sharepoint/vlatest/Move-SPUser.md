---
external help file: sharepoint.xml
online version: http://technet.microsoft.com/EN-US/library/5bff925f-3845-434e-be9f-3ba50673be28(Office.15).aspx
schema: 2.0.0
---

# Move-SPUser

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

```
Move-SPUser [-Identity] <SPUserPipeBind> -NewAlias <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-IgnoreSID] [-WhatIf]
```

## DESCRIPTION
The Move-SPUser cmdlet migrates user access from one domain user account to another.
If an entry for the new login name already exists, the entry is marked for deletion to make way for the migration.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
C:\PS>Move-SPUser -Identity "DOMAIN\JaneDoe" -NewAlias "Domain\JaneSmith"
```

This example migrates DOMAIN\JaneDoe to the new account of DOMAIN\JaneSmith.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Move-SPUser -Identity "DOMAIN\JaneDoe" -NewAlias "Domain\JaneSmith"
```

This example migrates DOMAIN\JaneDoe to the new account of DOMAIN\JaneSmith.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
C:\PS>Move-SPUser -Identity "DomainA\JaneDoe" -NewAlias "DomainB\JaneDoe"
```

This example migrates DOMAIN\JaneDoe from DomainA to the new account of DOMAINB\JaneDoe in DomainB.

## PARAMETERS

### -Identity
Specifies the GUID or login name of the user to be returned.

The type must be a valid login name or GUID of the user, in the form DOMAIN\username or 1234-5678-9876-0987.

```yaml
Type: SPUserPipeBind
Parameter Sets: (All)
Aliases: UserAlias

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NewAlias
Specifies the new login name of the user account.

The type must be a valid login name, in the form DOMAIN\username.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
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

### -IgnoreSID
Indicates (if present) that Active Directory will not be queried for the SID history attribute to ensure that the new login name is correspondent to the old login name.

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

