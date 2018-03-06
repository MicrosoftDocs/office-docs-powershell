---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPList

## SYNOPSIS
Updates list settings

## SYNTAX 

```powershell
Set-PnPList -Identity <ListPipeBind>
            [-EnableContentTypes <Boolean>]
            [-BreakRoleInheritance [<SwitchParameter>]]
            [-CopyRoleAssignments [<SwitchParameter>]]
            [-ClearSubscopes [<SwitchParameter>]]
            [-Title <String>]
            [-Hidden <Boolean>]
            [-EnableAttachments <Boolean>]
            [-EnableVersioning <Boolean>]
            [-EnableMinorVersions <Boolean>]
            [-MajorVersions <UInt32>]
            [-MinorVersions <UInt32>]
            [-EnableModeration <Boolean>]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPList -Identity "Demo List" -EnableContentTypes $true
```

Switches the Enable Content Type switch on the list

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPList -Identity "Demo List" -Hidden $true
```

Hides the list from the SharePoint UI.

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPList -Identity "Demo List" -EnableVersioning $true
```

Turns on major versions on a list

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPList -Identity "Demo List" -EnableVersioning $true -MajorVersions 20
```

Turns on major versions on a list and sets the maximum number of Major Versions to keep to 20.

### ------------------EXAMPLE 5------------------
```powershell
Set-PnPList -Identity "Demo Library" -EnableVersioning $true -EnableMinorVersions $true -MajorVersions 20 -MinorVersions 5
```

Turns on major versions on a document library and sets the maximum number of Major versions to keep to 20 and sets the maximum of Minor versions to 5.

### ------------------EXAMPLE 6------------------
```powershell
Set-PnPList -Identity "Demo List" -EnableAttachments $true
```

Turns on attachments on a list

## PARAMETERS

### -BreakRoleInheritance
If used the security inheritance is broken for this list

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ClearSubscopes
If used the unique permissions are cleared from child objects and they can inherit role assignments from this object

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -CopyRoleAssignments
If used the roles are copied from the parent web

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableAttachments
Enable or disable attachments. Set to $true to enable, $false to disable.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableContentTypes
Set to $true to enable content types, set to $false to disable content types

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableMinorVersions
Enable or disable minor versions versioning. Set to $true to enable, $false to disable.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableModeration
Enable or disable whether content approval is enabled for the list. Set to $true to enable, $false to disable.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableVersioning
Enable or disable versioning. Set to $true to enable, $false to disable.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Hidden
Hide the list from the SharePoint UI. Set to $true to hide, $false to show.

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The ID, Title or Url of the list.

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -MajorVersions
Maximum major versions to keep

```yaml
Type: UInt32
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -MinorVersions
Maximum minor versions to keep

```yaml
Type: UInt32
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
The title of the list

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)