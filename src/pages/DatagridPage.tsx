import {CdsButtonAction} from '@cds/react/button-action';
import {CdsGrid, CdsGridCell, CdsGridColumn, CdsGridFooter, CdsGridRow} from '@cds/react/grid';
import {CdsRadio} from '@cds/react/radio';

export default function DatagridPage() {
  return (
    <div className="p-10">
      <CdsGrid selectable="single">
        <CdsGridColumn type="action"></CdsGridColumn>
        <CdsGridColumn type="action"></CdsGridColumn>
        <CdsGridColumn>Host</CdsGridColumn>
        <CdsGridColumn>Status</CdsGridColumn>
        <CdsGridColumn>CPU</CdsGridColumn>
        <CdsGridColumn>Memory</CdsGridColumn>

        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>
            <CdsRadio>
              <input type="radio" name="hosts" aria-label="select host vm-host-001" />
            </CdsRadio>
          </CdsGridCell>
          <CdsGridCell>
            <CdsButtonAction aria-label="open menu"></CdsButtonAction>
          </CdsGridCell>
          <CdsGridCell>vm-host-001</CdsGridCell>
          <CdsGridCell>online</CdsGridCell>
          <CdsGridCell>5%</CdsGridCell>
          <CdsGridCell>10%</CdsGridCell>
        </CdsGridRow>

        <CdsGridFooter></CdsGridFooter>
      </CdsGrid>
    </div>
  );
}
