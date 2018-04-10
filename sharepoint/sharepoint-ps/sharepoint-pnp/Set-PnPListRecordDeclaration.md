---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Set-PnPListRecordDeclaration

## SYNOPSIS
The RecordDeclaration parameter supports 4 values:

AlwaysAllowManualDeclaration
NeverAllowManualDeclaration
UseSiteCollectionDefaults


## SYNTAX 

```powershell
Set-PnPListRecordDeclaration -List <ListPipeBind>
                             [-ManualRecordDeclaration <EcmListManualRecordDeclaration>]
                             [-AutoRecordDeclaration <Boolean>]
                             [-Web <WebPipeBind>]
                             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPListRecordDeclaration -List "Documents" -ManualRecordDeclaration NeverAllowManualDeclaration
```

Sets the manual record declaration to never allow

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPListRecordDeclaration -List "Documents" -AutoRecordDeclaration $true
```

Turns on auto record declaration for the list

## PARAMETERS

### -AutoRecordDeclaration
Defines if you want to set auto record declaration on the list

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -List
The List to set the manual record declaration settings for

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -ManualRecordDeclaration
Defines the manual record declaration setting for the lists

```yaml
Type: EcmListManualRecordDeclaration
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